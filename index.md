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
<title>Curved Video Slideshow</title>
<style>
  .slideshow-container {
    position: relative;
    width: 800px;
    height: 450px;
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

  video {
    max-width: 300px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  .prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.5);
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .prev:hover, .next:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }
</style>
</head>
<body>
<div class="slideshow-container">
  <div class="slide active">
    <video src="video1.mp4" controls autoplay loop muted></video>
    <video src="video2.mp4" controls autoplay loop muted></video>
    <video src="video3.mp4" controls autoplay loop muted></video>
  </div>
  <button class="prev" onclick="plusSlides(-1)">❮</button>
  <button class="next" onclick="plusSlides(1)">❯</button>
</div>

<script>
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlides() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    slides[slideIndex].classList.add('active');
  }

  function plusSlides(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
  }

  showSlides();
</script>
</body>
</html>
