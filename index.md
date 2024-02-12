---
title: Home
layout: home
nav_order: 1
---
test a

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Slideshow cu videoclipuri</title>
<style>
.slideshow-container {
    position: relative;
    max-width: 800px;
    margin: auto;
}
.video-slide {
    display: none;
    width: 100%;
}
.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
}
.prev {
    left: 0;
}
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}
.prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
}
</style>
</head>
<body>

<div class="slideshow-container">
    <div class="video-slide">
        <video controls>
            <source src="video1.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    <div class="video-slide">
        <video controls>
            <source src="video2.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    <div class="video-slide">
        <video controls>
            <source src="video3.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
  
    <a class="prev" onclick="changeSlide(-1)">&#10094;</a>
    <a class="next" onclick="changeSlide(1)">&#10095;</a>
</div>

<script>
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("video-slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
</script>

</body>
</html>