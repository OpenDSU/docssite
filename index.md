---
title: Home
layout: home
nav_order: 1
---
123

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
    overflow: hidden;
  }

  .video-container {
    display: none;
  }

  .arrow {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
    line-height: 50px;
    font-size: 24px;
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

<div class="slideshow-container">
  <div class="video-container">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID_1" frameborder="0" allowfullscreen></iframe>
  </div>
  <div class="video-container">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID_2" frameborder="0" allowfullscreen></iframe>
  </div>
  <div class="video-container">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID_3" frameborder="0" allowfullscreen></iframe>
  </div>
  <div class="video-container">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID_4" frameborder="0" allowfullscreen></iframe>
  </div>
  <div class="video-container">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID_5" frameborder="0" allowfullscreen></iframe>
  </div>

  <a class="arrow prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="arrow next" onclick="plusSlides(1)">&#10095;</a>
</div>

<script>
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("video-container");
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
