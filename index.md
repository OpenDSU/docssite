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
  /* Style for the iframe container */
  .playlist-container {
    border: 4px solid #ff0000; /* Add a thicker red border around the playlist */
    padding: 20px; /* Add padding to the playlist */
    margin-bottom: 20px; /* Add space at the bottom */
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    width: 80%; /* Set width to 80% of the viewport width */
    max-width: 800px; /* Set maximum width */
    margin: 0 auto; /* Center horizontally */
  }
</style>
</head>
<body>

<div class="playlist-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL4MplU2PrVpaKx_fyz9IFOd5xP_3VnAU2" frameborder="0" allowfullscreen></iframe>
</div>

</body>
</html>