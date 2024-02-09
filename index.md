---
title: Home
layout: home
nav_order: 1
---
absadasd


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>YouTube Video Slideshow</title>
<style>
    body {
        position: relative;
        padding-top: 50px; /* Adjusted to leave space for the menu */
    }

    .menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #333;
        color: white;
        padding: 10px 0;
        text-align: center;
        z-index: 3; /* Ensure menu is above other content */
    }

    .video-container {
        position: relative;
        margin-bottom: 20px;
        overflow: hidden;
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
        width: 320px;
        height: 180px;
    }
    
    .video-name {
        margin-top: 5px;
        font-size: 14px;
        color: #333;
    }
    
    .prev, .next {
        position: fixed;
        top: calc(50% - 20px); /* Adjusted to center vertically */
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 10px;
        border: none;
        cursor: pointer;
        z-index: 2;
        transition: color 0.3s, background-color 0.3s;
    }
    
    .prev {
        left: 10px;
    }
    
    .next {
        right: 10px;
    }

    .prev:hover, .next:hover {
        background-color: rgba(128, 0, 128, 0.5);
    }
</style>
</head>
<body>
<div class="menu">
    Menu Content
</div>
<div class="video-container">
    <div class="video-row">
        <!-- Replace the following iframe src with the embed link of the playlist -->
        <div class="video-item">
            <iframe src="https://www.youtube.com/embed/videoseries?list=UULFWBkFj-M52u1UywvGOOVrkg" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 1</div>
        </div>
        <!-- Repeat the same pattern for other videos -->
    </div>
</div>

<button class="prev" onclick="scrollVideos(-1)">❮</button>
<button class="next" onclick="scrollVideos(1)">❯</button>

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

