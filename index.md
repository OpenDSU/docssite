---
title: Home
layout: home
nav_order: 1
---





<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>YouTube Video Cards Slideshow</title>
<style>
    .slideshow-container {
        position: relative; /* Set the container as the positioning context */
        width: 90%;
        margin: 0 auto;
        overflow: hidden;
    }
    .slideshow {
        display: flex;
        flex-wrap: nowrap;
        transition: transform 0.3s ease;
    }
    .card {
        flex: 0 0 calc(50% - 20px);
        margin: 10px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    iframe {
        width: 100%;
        height: 200px;
    }
    h2 {
        margin-top: 10px;
    }
    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        outline: none;
        z-index: 1000; /* Increase the z-index */
    }
    .prev {
        left: 30px;
    }
    .next {
        right: 30px;
    }
</style>
</head>
<body>

<div class="slideshow-container">
    <div class="slideshow">
        <div class="card">
            <iframe src="https://www.youtube.com/embed/VIDEO_ID_1" frameborder="0" allowfullscreen></iframe>
            <h2>Video 1</h2>
        </div>
        <div class="card">
            <iframe src="https://www.youtube.com/embed/VIDEO_ID_2" frameborder="0" allowfullscreen></iframe>
            <h2>Video 2</h2>
        </div>
        <div class="card">
            <iframe src="https://www.youtube.com/embed/VIDEO_ID_3" frameborder="0" allowfullscreen></iframe>
            <h2>Video 3</h2>
        </div>
        <div class="card">
            <iframe src="https://www.youtube.com/embed/VIDEO_ID_4" frameborder="0" allowfullscreen></iframe>
            <h2>Video 4</h2>
        </div>
        <div class="card">
            <iframe src="https://www.youtube.com/embed/VIDEO_ID_5" frameborder="0" allowfullscreen></iframe>
            <h2>Video 5</h2>
        </div>
        <div class="card">
            <iframe src="https://www.youtube.com/embed/VIDEO_ID_6" frameborder="0" allowfullscreen></iframe>
            <h2>Video 6</h2>
        </div>
    </div>
</div>
<button class="prev" onclick="scrollSlides(-1)">❮</button>
<button class="next" onclick="scrollSlides(1)">❯</button>

<script>
    let slideIndex = 0;
    const slides = document.querySelector('.slideshow');
    const cards = document.querySelectorAll('.card');
    const slideWidth = 100 / cards.length;

    function scrollSlides(n) {
        slideIndex += n;
        if (slideIndex < 0) {
            slideIndex = 0;
        } else if (slideIndex >= cards.length) {
            slideIndex = cards.length - 1;
        }
        showSlides();
    }

    function showSlides() {
        const translateXValue = slideIndex * slideWidth;
        slides.style.transform = `translateX(-${translateXValue}%)`;
    }
</script>

</body>
</html>
