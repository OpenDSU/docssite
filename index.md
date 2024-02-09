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
<title>Curved Slideshow</title>
<style>
  .slideshow-container {
    position: relative;
    width: 600px;
    height: 400px;
    margin: auto;
    overflow: hidden;
  }

  .slide {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0;
    transition: opacity 1s ease;
  }

  .slide.active {
    opacity: 1;
  }

  img {
    max-width: 30%;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
</style>
</head>
<body>
<div class="slideshow-container">
  <div class="slide active">
    <img src="image1.jpg" alt="Image 1">
  </div>
  <div class="slide">
    <img src="image2.jpg" alt="Image 2">
    <img src="image3.jpg" alt="Image 3">
  </div>
</div>

<script>
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlides() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    slides[slideIndex].classList.add('active');
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
  }

  showSlides();
</script>
</body>
</html>



