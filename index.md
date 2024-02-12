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
<title>Carousel with Cards</title>
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
      <img src="https://via.placeholder.com/300x200" alt="Card 1">
      <h3>Card 1</h3>
      <p>This is the first card.</p>
    </div>
    <div class="card">
      <img src="https://via.placeholder.com/300x200" alt="Card 2">
      <h3>Card 2</h3>
      <p>This is the second card.</p>
    </div>
    <div class="card">
      <img src="https://via.placeholder.com/300x200" alt="Card 3">
      <h3>Card 3</h3>
      <p>This is the third card.</p>
    </div>
  </div>
  <button class="arrow next" onclick="nextSlide()">&#10095;</button> <!-- Moved the arrow button here -->
</div>

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


