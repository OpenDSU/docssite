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
<title>YouTube Video Slideshow</title>
<style>
    .video-container {
        position: relative;
        margin-bottom: 20px;
        overflow: hidden;
        width: 70%; /* Adjust to 70% width */
        margin: auto; /* Center the container */
        position: relative;
    }
    
    .video-row {
        display: flex;
        flex-wrap: nowrap;
        transition: transform 0.3s ease;
    }
    
    .video-item {
        flex: 0 0 auto;
        margin-right: 10px;
        text-align: center;
    }
    
    iframe {
        width: 100%; /* Adjust to cover container width */
        height: 180px;
    }
    
    .video-name {
        margin-top: 5px;
        font-size: 14px;
        color: #333;
    }
    
    .prev, .next {
        position: absolute;
        top: 50%;
        background-color: transparent;
        color: purple;
        padding: 15px;
        border: none;
        cursor: pointer;
        z-index: 1;
        font-size: 50px;
    }
    
    .prev {
        left: -50px; /* Adjust to place outside left border */
    }
    
    .next {
        right: -50px; /* Adjust to place outside right border */
    }
</style>
</head>
<body>
<div class="video-container">
    <button class="prev" onclick="scrollVideos(-1)">❮</button>
    <div class="video-row">
        <div class="video-item">
            <iframe src="URL_OF_VIDEO_1" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 1</div>
        </div>
        <!-- Repeat the same pattern for other videos -->
    </div>
    <button class="next" onclick="scrollVideos(1)">❯</button>
</div>

<script>
    let currentIndex = 0;

    function scrollVideos(direction) {
        const videoRow = document.querySelector('.video-row');
        const videoItems = document.querySelectorAll('.video-item');
        const numVideos = videoItems.length;
        const videoWidth = videoItems[0].offsetWidth + parseInt(window.getComputedStyle(videoItems[0]).marginRight);

        currentIndex = (currentIndex + direction + numVideos) % numVideos;
        const newPosition = -currentIndex * videoWidth;
        videoRow.style.transform = `translateX(${newPosition}px)`;
    }
</script>
</body>
</html>
