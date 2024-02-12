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
<title>Gallery</title>
<style>
.gallery {
  --s: 150px; /* the image size */
  
  display: grid;
  transform-style: preserve-3d;
  animation: r 15s linear infinite;
  position: relative;
}
@keyframes r {
  0% {transform: perspective(450px) rotateX(-100deg) rotate(0deg)}
  to {transform: perspective(450px) rotateX(-100deg) rotate(-360deg)}
}
.gallery > img {
  grid-area: 1/1;
  width: var(--s);
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  transform: rotate(var(--_a)) translateY(120%) rotateX(90deg);
}
.gallery > img:nth-child(1) {--_a: 0deg}
.gallery > img:nth-child(2) {--_a: 60deg}
.gallery > img:nth-child(3) {--_a: 120deg}
.gallery > img:nth-child(4) {--_a: 180deg}
.gallery > img:nth-child(5) {--_a: 240deg}
.gallery > img:nth-child(6) {--_a: 300deg}

.gallery::before {
  content: "";
  position: absolute;
  inset: -100%;
  clip-path: polygon(50% 0,calc(50% + .866*50%) 25%,calc(50% + .866*50%) 75%,50% 100%,calc(50% - .866*50%) 75%,calc(50% - .866*50%) 25%);
  background: #99B2B7;
  transform: translateZ(calc(var(--s)/2)) rotate(90deg);
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-content: center;
  background: #547980;
  overflow: hidden;
}
</style>
</head>
<body>
<div class="gallery">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/0A3bGUAajrM?si=syIK2kZj3rmkgZKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <img src="https://picsum.photos/id/1060/300/300" alt="someone preparing artisanal coffee">
  <img src="https://picsum.photos/id/225/300/300" alt="some tee">
  <img src="https://picsum.photos/id/163/300/300" alt="an empty table in a restaurant">
  <img src="https://picsum.photos/id/180/300/300" alt="a laptop with a notebook">
  <img src="https://picsum.photos/id/20/300/300" alt="a laptop and many books around it">
</div>
</body>
</html>
