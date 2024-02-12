---
title: Home
layout: home
nav_order: 1
---


<<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>3D Carousel</title>
<style>
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    perspective: 1000px;
    perspective-origin: 50% 50%;
  }

  .carousel-container {
    width: 100vw;
    height: 100vh;
    position: relative;
  }

  .carousel {
    width: 300px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    animation: rotate 10s linear infinite;
  }

  .carousel img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  @keyframes rotate {
    from {
      transform: translateX(-50%) translateY(-50%) rotateY(0deg);
    }
    to {
      transform: translateX(-50%) translateY(-50%) rotateY(360deg);
    }
  }

</style>
</head>
<body>
<div class="carousel-container">
  <div class="carousel">
    <img src="https://via.placeholder.com/300x200?text=Image+1" alt="Image 1">
    <img src="https://via.placeholder.com/300x200?text=Image+2" alt="Image 2">
    <img src="https://via.placeholder.com/300x200?text=Image+3" alt="Image 3">
    <img src="https://via.placeholder.com/300x200?text=Image+4" alt="Image 4">
  </div>
</div>

<script>
  const carousel = document.querySelector('.carousel');
  const images = carousel.children;

  const spacing = 360 / images.length;

  for (let i = 0; i < images.length; i++) {
    images[i].style.transform = `rotateY(${i * spacing}deg) translateZ(200px)`;
  }
</script>
</body>
</html>

