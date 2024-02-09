---
title: Home
layout: home
nav_order: 1
---


<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Embedded YouTube Playlist</title>
<style>
  /* Style for the iframe container */
  .playlist-container {
    position: relative;
    width: 560px; /* Adjust width as needed */
    height: 315px; /* Adjust height as needed */
    margin: 0 auto; /* Center the container horizontally */
    overflow: hidden; /* Hide any overflow from the iframe */
  }
  /* Style for the overlay */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1); /* Semi-transparent black background */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
  }
</style>
</head>
<body>

<div class="playlist-container">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=PL4MplU2PrVpaKx_fyz9IFOd5xP_3VnAU2" frameborder="0" allowfullscreen></iframe>
  <div class="overlay">
    <p>Please, watch our videos</p>
  </div>
</div>

</body>
</html>