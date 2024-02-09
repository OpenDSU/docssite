---
title: Home
layout: home
nav_order: 1
---

test

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Curved Slideshow with Video</title>
<style>
  .slideshow-container {
    position: relative;
    width: 560px; /* Adjust based on video width */
    height: 315px; /* Adjust based on video height */
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

  iframe {
    max-width: 30%; /* Adjust based on your preference */
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
</style>
</head>
<body>
<div class="slideshow-container">
  <div class="slide active">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/RYxe61jE_J8?si=01UZn10gs3FZFJo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div class="slide">
    <!-- Placeholder slide -->
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