---
title: Home
layout: home
nav_order: 1
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Expanding Flex Cards</title>
  <style>
    /* 
      @project Expanding Flex Cards
      @author: Jamshid Elmi
      @created: 2022-03-25 19:13:18
      @modified: 2022-03-25 19:13:18
      @tutorial: https://youtu.be/pvjNbaV0Keo
    */
    :root {
      --cb: cubic-bezier(.05, .61, .41, .95);
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      height: 100vh;
      font-family: "Roboto", sans-serif;
      transition: 0.25s;
      background: #e1e1e1;
    }

    body.dark {
      background: #333;
      color: white;
    }

    .cards {
      display: flex;
      max-width: 800px;
      width: calc(100% - 100px);
      height: 400px;
    }

    .cards .card .info .title {
      font-weight: bold;
      font-size: 1.2rem;
    }

    .cards .card .label .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 40px;
      height: 40px;
      background-color: white;
      color: var(--color);
      border-radius: 50%;
    }

    .cards .card .label .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;
      white-space: pre;
      transition: 1s var(--cb);
    }

    .cards .card {
      position: relative;
      min-width: 60px;
      background: var(--bg);
      overflow: hidden;
      margin: 5px;
      background-size: auto 150%;
      background-position: center;
      cursor: pointer;
      transition: 0.5s var(--cb);
      border-radius: 30px;
    }

    .cards .card .label {
      display: flex;
      position: absolute;
      right: 0;
      height: 40px;
      transition: 0.5s var(--cb);
    }

    .cards .card.active .label {
      bottom: 20px;
      left: 20px;
    }

    .cards .card.active {
      flex-grow: 10000;
      background-size: auto 100%;
    }

    .cards .card:not(.active) .label {
      bottom: 10px;
      left: 10px;
    }

    .cards .card .shadow {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100px;
      background: linear-gradient(
        0, #0004, transparent
      );
    }

    .cards .card.active .info {
      opacity: 1;
    }

    .cards .card:not(.active) .info {
      opacity: 0;
    }
  </style>
</head> 
<body class="dark">

  <div class="cards">

    <div class="card active" style="--bg: url(images/img-1.jpg)">
      <div class="shadow"></div> 
      <div class="label">
        <div class="icon" style="--color: green">
          <ion-icon name="sunny"></ion-icon>
        </div>
        <div class="info">
          <div class="title">Spring</div>
          <div>Nature Looks Attractive</div>
        </div>
      </div>
    </div>

    <div class="card" style="--bg: url(images/img-2.jpg)">
      <div class="shadow"></div> 
      <div class="label">
        <div class="icon" style="--color: blue">
          <ion-icon name="sparkles"></ion-icon>
        </div>
        <div class="info">
          <div class="title">Summer</div>
          <div>Summer is a State of Mind</div>
        </div>
      </div>
    </div>

    <div class="card" style="--bg: url(images/img-3.jpg)">
      <div class="shadow"></div> 
      <div class="label">
        <div class="icon" style="--color: orange">
          <ion-icon name="thunderstorm"></ion-icon>
        </div>
        <div class="info">
          <div class="title">Autumn</div>
          <div>Life Starts All Over Again</div>
        </div>
      </div>
    </div>

    <div class="card" style="--bg: url(images/img-4.jpg)">
      <div class="shadow"></div> 
      <div class="label">
        <div class="icon" style="--color: black">
          <ion-icon name="snow"></ion-icon>
        </div>
        <div class="info">
          <div class="title">Winter</div>
          <div>Not a Season, It's Celebration</div>
        </div>
      </div>
    </div>

  </div>

  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" ></script>
  <script src="script.js"></script>
</body>
</html>
