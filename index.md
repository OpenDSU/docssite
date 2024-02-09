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
<style>
  /* Style for the video list */
  #playlist {
    display: flex;
    flex-wrap: nowrap; /* Prevent wrapping to next line */
    overflow-x: auto; /* Enable horizontal scrolling */
    padding: 10px 0; /* Add some space around the videos */
    margin-bottom: 20px; /* Add space at the bottom */
  }
  .video-item {
    flex: 0 0 auto; /* Prevent videos from growing or shrinking */
    margin-right: 10px; /* Add space between videos */
  }
  .video-item img {
    width: 200px; /* Set width of video thumbnails */
    height: auto; /* Maintain aspect ratio */
  }
</style>
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
      videoElement.className = 'video-item';
      videoElement.innerHTML = `
        <a href="${videoUrl}" target="_blank">
          <img src="${thumbnailUrl}" alt="${title}">
          <p>${title}</p>
        </a>
      `;
      playlistDiv.appendChild(videoElement);
    });
  })
  .catch(error => {
    console.error('Error fetching playlist:', error);
  });
</script>

</body>
</html>