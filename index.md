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
<title>YouTube Video Carousel</title>
<style>
  .carousel-container {
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }

  .carousel-content {
    display: flex;
    transition: transform 0.5s ease;
  }

  .video-container {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .video-container iframe {
    width: 100%;
    height: auto;
  }

  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-weight: bold;
    z-index: 1;
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }
</style>
</head>
<body>

<div class="carousel-container">
  <div class="carousel-content">
    <div class="video-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_1" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="video-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_2" frameborder="0" allowfullscreen></iframe>
    </div>
    <!-- Add more video containers as needed -->
  </div>
  <a class="prev" onclick="moveCarousel(-1)">&#10094;</a>
  <a class="next" onclick="moveCarousel(1)">&#10095;</a>
</div>

<script>
  var slideIndex = 1;
  showVideo(slideIndex);

  function moveCarousel(n) {
    showVideo(slideIndex += n);
  }

  function showVideo(n) {
    var i;
    var videos = document.getElementsByClassName("video-container");
    if (n > videos.length) {slideIndex = 1}
    if (n < 1) {slideIndex = videos.length}
    for (i = 0; i < videos.length; i++) {
        videos[i].style.display = "none";
    }
    videos[slideIndex-1].style.display = "block";
  }
</script>

</body>
</html>
