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
  /* Style for the container */
  #video-container {
    display: flex;
    flex-wrap: nowrap; /* Prevent wrapping to next line */
    overflow-x: auto; /* Enable horizontal scrolling */
    padding: 10px 0; /* Add some space around the videos */
    margin-bottom: 20px; /* Add space at the bottom */
  }
  /* Style for each video */
  .video-item {
    flex: 0 0 auto; /* Prevent videos from growing or shrinking */
    margin-right: 10px; /* Add space between videos */
  }
</style>
</head>
<body>

<div id="video-container">
  <!-- Add as many iframes as needed -->
  <iframe class="video-item" width="320" height="180" src="https://www.youtube.com/embed/0A3bGUAajrM" frameborder="0" allowfullscreen></iframe>
  <iframe class="video-item" width="320" height="180" src="https://www.youtube.com/embed/VIDEO_ID_2" frameborder="0" allowfullscreen></iframe>
  <iframe class="video-item" width="320" height="180" src="https://www.youtube.com/embed/VIDEO_ID_3" frameborder="0" allowfullscreen></iframe>
  <!-- Add more iframes as needed -->
</div>

</body>
</html>