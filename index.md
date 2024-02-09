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
<title>Slideshow with Arrows</title>
<style>
  .slideshow-container {
    position: relative;
    max-width: 800px;
    margin: auto;
    overflow: hidden;
  }
  
  .slide {
    display: none;
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

<div class="slideshow-container">
  <div class="slide">
    <img src="slide1.jpg" style="width:100%">
  </div>

  <div class="slide">
    <img src="slide2.jpg" style="width:100%">
  </div>

  <div class="slide">
    <img src="slide3.jpg" style="width:100%">
  </div>

  <!-- Navigation arrows -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
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