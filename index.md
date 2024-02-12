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
<title>Carousel with Cards and YouTube Videos</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
  }

  .carousel {
    width: 80%;
    margin: 50px auto;
    position: relative;
    overflow: hidden;
  }

  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease;
  }

  .card {
    flex: 0 0 33.33%;
    border: 2px solid #ccc;
    border-radius: 10px;
    margin: 0 10px;
    box-sizing: border-box;
  }

  .card img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ccc;
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;
  }

  .prev {
    left: -40px; /* Adjusted from -50px to -40px */
  }

  .next {
    right: -40px; /* Adjusted from -50px to -40px */
  }
</style>
</head>
<body>

<div class="carousel">
  <button class="arrow prev" onclick="prevSlide()">&#10094;</button> <!-- Moved the arrow button here -->
  <div class="carousel-inner">
    <div class="card">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID_1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3>Card 1</h3>
      <p>This is the first card.</p>
    </div>
    <div class="card">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID_2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3>Card 2</h3>
      <p>This is the second card.</p>
    </div>
    <div class="card">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID_3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3>Card 3</h3>
      <p>This is the third card.</p>
    </div>
  </div>
  <button class="arrow next" onclick="nextSlide()">&#10095;</button> <!-- Moved the arrow button here -->
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script>
  $(document).ready(function(){
    $('.carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    });
  });
</script>

<script>
  let currentIndex = 0;
  const slides = document.querySelectorAll('.card');

  function showSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }
</script>

</body>
</html>
