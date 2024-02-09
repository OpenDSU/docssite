---
title: Home
layout: home
nav_order: 1
---

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>YouTube Playlist</title>
</head>
<body>

<div id="playlist"></div>

<script>
// Replace 'YOUR_PLAYLIST_ID' with the actual ID of your YouTube playlist
const playlistId = 'PL4MplU2PrVpaKx_fyz9IFOd5xP_3VnAU2';
const apiKey = 'YOUR_YOUTUBE_API_KEY';

// Fetch the playlist data from the YouTube Data API
fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Loop through the playlist items and create HTML elements to display them
    const playlistDiv = document.getElementById('playlist');
    data.items.forEach(item => {
      const videoId = item.snippet.resourceId.videoId;
      const title = item.snippet.title;
      const thumbnailUrl = item.snippet.thumbnails.default.url;
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

      // Create HTML elements for each video
      const videoElement = document.createElement('div');
      videoElement.innerHTML = `
        <div>
          <a href="${videoUrl}" target="_blank">
            <img src="${thumbnailUrl}" alt="${title}">
            <h2>${title}</h2>
          </a>
        </div>
      `;
      playlistDiv.appendChild(videoElement);
    });
  })
  .catch(error => {
    console.error('Error fetching playlist:', error);
  });
</script>

</body>