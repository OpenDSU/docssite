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
<title>Embedded YouTube Playlist</title>
<style>
    .playlist-container {
        overflow-x: auto;
        white-space: nowrap;
        padding: 10px 0;
    }

    .playlist-video {
        display: inline-block;
        margin-right: 10px;
    }
</style>
</head>
<body>

<div class="playlist-container">
    <!-- Add each video from the playlist here -->
    <iframe class="playlist-video" width="300" height="169" src="https://www.youtube.com/embed/RYxe61jE_J8"></iframe>
    <iframe class="playlist-video" width="300" height="169" src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
    <!-- Add more iframes for each video in the playlist -->
</div>

</body>
</html>