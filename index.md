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
<title>YouTube Video Slideshow</title>
<style>
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
    }
    
    iframe {
        width: 320px;
        height: 180px;
    }
    
    .prev, .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 10px;
        border: none;
        cursor: pointer;
        z-index: 1;
    }
    
    .prev {
        left: 0;
    }
    
    .next {
        right: 0;
    }
</style>
</head>
<body>
<div class="video-container">
    <button class="prev" onclick="scrollVideos(-1)">❮</button>
    <div class="video-row">
        <div class="video-item"><iframe src="URL_OF_VIDEO_1" frameborder="0" allowfullscreen></iframe></div>
        <div class="video-item"><iframe src="URL_OF_VIDEO_2" frameborder="0" allowfullscreen></iframe></div>
        <div class="video-item"><iframe src="URL_OF_VIDEO_3" frameborder="0" allowfullscreen></iframe></div>
        <div class="video-item"><iframe src="URL_OF_VIDEO_4" frameborder="0" allowfullscreen></iframe></div>
        <div class="video-item"><iframe src="URL_OF_VIDEO_5" frameborder="0" allowfullscreen></iframe></div>
        <div class="video-item"><iframe src="URL_OF_VIDEO_6" frameborder="0" allowfullscreen></iframe></div>
        <div class="video-item"><iframe src="URL_OF_VIDEO_7" frameborder="0" allowfullscreen></iframe></div>
        <div class="video-item"><iframe src="URL_OF_VIDEO_8" frameborder="0" allowfullscreen></iframe></div>
    </div>
    <button class="next" onclick="scrollVideos(1)">❯</button>
</div>

<script>
    let currentIndex = 0;

    function scrollVideos(direction) {
        const videoContainer = document.querySelector('.video-container');
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