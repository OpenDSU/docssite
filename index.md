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
<title>Carousel Slideshow</title>
<style>
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Hides scrollbar in Firefox */
  -ms-overflow-style: none; /* Hides scrollbar in Edge and IE */
}

.carousel::-webkit-scrollbar {
  display: none; /* Hides scrollbar in Chrome, Safari, and Opera */
}

.card {
  flex: 0 0 auto;
  width: 300px;
  margin-right: 20px;
  scroll-snap-align: start;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
}
</style>
</head>
<body>

<div class="carousel">
  <div class="card">
    <h2>Card 1</h2>
    <p>This is the content of card 1.</p>
  </div>
  <div class="card">
    <h2>Card 2</h2>
    <p>This is the content of card 2.</p>
  </div>
  <div class="card">
    <h2>Card 3</h2>
    <p>This is the content of card 3.</p>
  </div>
  <div class="card">
    <h2>Card 4</h2>
    <p>This is the content of card 4.</p>
  </div>
  <div class="card">
    <h2>Card 5</h2>
    <p>This is the content of card 5.</p>
  </div>
  <div class="card">
    <h2>Card 6</h2>
    <p>This is the content of card 6.</p>
  </div>
</div>

</body>
</html>


