---
title: Home
layout: home
nav_order: 1
---

 
test 1



<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Slideshow with Arrows</title>
<style>
  ..video-container {
    position: relative;
    max-width: 800px;
    margin: auto;
    overflow: hidden;
  }
  
  .slide {
    display: none;
    padding-left: 15%; /* Adjust space before pictures */
    padding-right: 15%; /* Adjust space after pictures */
  }
  
  .slide img {
    width: 70%; /* Adjust image width */
    margin: 0 auto; /* Center the image */
  }
  
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-weight: bold;
    font-size: 20px;
    z-index: 1000;
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

<div class="video-container">
    <button class="prev" onclick="scrollVideos(-1)">❮</button>
    <div class="video-row">
        <!-- Replace the following iframe src with the embed link of the playlist -->
        <div class="video-item">
            <iframe src="https://www.youtube.com/embed/videoseries?list=UULFWBkFj-M52u1UywvGOOVrkg" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 1</div>
        </div>
        <div class="video-item">
            <iframe src="https://www.youtube.com/embed/videoseries?list=UULFWBkFj-M52u1UywvGOOVrkg" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 1</div>
        </div>
        <div class="video-item">
            <iframe src="https://www.youtube.com/embed/videoseries?list=UULFWBkFj-M52u1UywvGOOVrkg" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 1</div>
        </div>
        <div class="video-item">
            <iframe src="https://www.youtube.com/embed/videoseries?list=UULFWBkFj-M52u1UywvGOOVrkg" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 1</div>
        </div>
        <div class="video-item">
            <iframe src="https://www.youtube.com/embed/videoseries?list=UULFWBkFj-M52u1UywvGOOVrkg" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 1</div>
        </div>
        <div class="video-item">
            <iframe src="URL_OF_VIDEO_2" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 2</div>
        </div>
        <!-- Repeat the same pattern for other videos -->
    </div>

    <button class="next" onclick="scrollVideos(1)">❯</button>
</div>

<script>
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
</script>

</body>
</html>
