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
  <title>YouTube Video Slideshow</title>
  <style>
    .slideshow-container {
      position: relative;
      max-width: 800px;
      margin: auto;
    }
    .video-slide {
      display: none;
    }
    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: auto;
      padding: 16px;
      margin-top: -22px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .prev:hover, .next:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    .prev {
      left: 0;
    }
    .next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }
  </style>
</head>
<body>

<div class="slideshow-container">
  <div class="video-slide">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div class="video-slide">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <!-- Add more video slides as needed -->

  <a class="prev" onclick="changeVideo(-1)">&#10094;</a>
  <a class="next" onclick="changeVideo(1)">&#10095;</a>
</div>

<script>
  var slideIndex = 1;
  showVideo(slideIndex);

  function changeVideo(n) {
    showVideo(slideIndex += n);
  }

  function showVideo(n) {
    var i;
    var videos = document.getElementsByClassName("video-slide");
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
