---
title: Home
layout: home
nav_order: 1
---
tee
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scrollable Cards</title>
  <style>
    .scroll-container {
      width: 100%;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      padding: 20px 0;
      position: relative;
    }

    .card {
      display: inline-block;
      width: 300px;
      height: 200px;
      background-color: #f0f0f0;
      margin: 0 10px;
    }

    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: purple;
      color: white;
      padding: 10px;
      cursor: pointer;
      border-radius: 50%;
      z-index: 1;
    }

    .arrow-left {
      left: 0;
    }

    .arrow-right {
      right: 0;
    }
  </style>
</head>
<body>
  <div class="scroll-container">
    <div class="arrow arrow-left">&lt;</div>
    <div class="card">Video 1: Insert YouTube Video Here</div>
    <div class="card">Video 2: Insert YouTube Video Here</div>
    <div class="card">Video 3: Insert YouTube Video Here</div>
    <div class="arrow arrow-right">&gt;</div>
  </div>

  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const container = document.querySelector('.scroll-container');
      const scrollStep = 300; // Adjust scroll step as per your card width

      document.querySelector('.arrow-left').addEventListener('click', function() {
        container.scrollBy(-scrollStep, 0);
      });

      document.querySelector('.arrow-right').addEventListener('click', function() {
        container.scrollBy(scrollStep, 0);
      });
    });
  </script>
</body>
</html>

