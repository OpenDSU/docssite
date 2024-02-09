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
    }
    
    .video-item {
        flex: 0 0 auto;
        scroll-snap-align: start;
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
    <div class="video-item"><iframe src="URL_OF_VIDEO_1" frameborder="0" allowfullscreen></iframe></div>
    <div class="video-item"><iframe src="URL_OF_VIDEO_2" frameborder="0" allowfullscreen></iframe></div>
    <div class="video-item"><iframe src="URL_OF_VIDEO_3" frameborder="0" allowfullscreen></iframe></div>
    <div class="video-item"><iframe src="URL_OF_VIDEO_4" frameborder="0" allowfullscreen></iframe></div>
    <div class="video-item"><iframe src="URL_OF_VIDEO_5" frameborder="0" allowfullscreen></iframe></div>
    <div class="video-item"><iframe src="URL_OF_VIDEO_6" frameborder="0" allowfullscreen></iframe></div>
    <div class="video-item"><iframe src="URL_OF_VIDEO_7" frameborder="0" allowfullscreen></iframe></div>
    <div class="video-item"><iframe src="URL_OF_VIDEO_8" frameborder="0" allowfullscreen></iframe></div>
    <button class="next" onclick="scrollVideos(1)">❯</button>
</div>

<script>
    let currentIndex = 0;

    function scrollVideos(direction) {
        const videoContainer = document.querySelector('.video-container');
        const videoItems = document.querySelectorAll('.video-item');
        const numVideos = videoItems.length;

        currentIndex = (currentIndex + direction + numVideos) % numVideos;
        const newPosition = videoItems[currentIndex].offsetLeft - videoContainer.offsetLeft;
        videoContainer.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
    }
</script>

</body>
</html>