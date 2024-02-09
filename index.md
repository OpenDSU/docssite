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
    position: relative;
    width: 560px;
    height: 315px;
    overflow: hidden;
  }
  
  /* Style for the overlay */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  
  /* Style for the text */
  .overlay-text {
    color: #fff;
    font-size: 24px;
    text-align: center;
    transform: translateY(-50px);
    transition: transform 0.5s ease-in-out;
  }
  
  /* Style for the playlist iframe */
  .playlist-iframe {
    transition: transform 0.5s ease-in-out;
  }
  
  /* Hover effect */
  .playlist-container:hover .overlay {
    opacity: 1;
  }
  
  .playlist-container:hover .overlay-text {
    transform: translateY(0);
  }
</style>
</head>
<body>

<div class="playlist-container">
  <iframe class="playlist-iframe" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=UULFWBkFj-M52u1UywvGOOVrkg" frameborder="0" allowfullscreen></iframe>
  <div class="overlay">
    <div class="overlay-text">Surprise!</div>
  </div>
</div>

</body>
</html>