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
<title>Video Carousel</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
<style>
.video-section .item {
  opacity: 0.4;
  transition: 0.4s ease all;
  margin: 0 20px;
  transform: scale(0.8);
}

@media(max-width: 1000px) {
  .video-section .item {
    margin: 0;
    transform: scale(0.9);
  }
}

.video-section .active .item {
  opacity: 1;
  transform: scale(1);
}

body {
  margin: 80px 0 0 0;
}

.video-section .owl-item {
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1.0, 1.0);
}

.video-section iframe {
  max-width: 100%;
  height: auto;
}
</style>
</head>
<body>

<div class="owl-carousel video-section">
  <div class="item">
    <div>
        <iframe width="218.27" height="150.6" src="https://www.youtube.com/embed/HCkeFXyeJxg?si=ZpnXwsa9qghC2OMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="item">
    <div>
        <iframe width="218.27" height="150.6" src="https://www.youtube.com/embed/HCkeFXyeJxg?si=ZpnXwsa9qghC2OMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="item">
    <div>
        <iframe width="218.27" height="150.6" src="https://www.youtube.com/embed/HCkeFXyeJxg?si=ZpnXwsa9qghC2OMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script>
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop: true,
    margin: 10,
    items: 1,
    nav: true,
    responsive: {
      0: { items: 1, stagePadding: 60 },
      600: { items: 1, stagePadding: 100 },
      1000: { items: 1, stagePadding: 200 },
      1200: { items: 1, stagePadding: 250 },
      1400: { items: 1, stagePadding: 300 },
      1600: { items: 1, stagePadding: 350 },
      1800: { items: 1, stagePadding: 400 }
    }
  });
});
</script>
</body>
</html>
