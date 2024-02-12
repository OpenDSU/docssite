---
title: Home
layout: home
nav_order: 1
---
testabc

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
        padding-left: 0; /* Remove padding before videos */
        padding-right: 0; /* Remove padding after videos */
        margin: 0 auto; /* Center the video slider */
    }
    
    .video-item {
        flex: 0 0 auto;
        margin-right: 10px;
        text-align: center;
    }
    
    iframe {
        width: 240px; /* Adjust width of each video */
        height: 135px; /* Adjust height of each video */
    }
    
    .video-name {
        margin-top: 5px;
        font-size: 14px;
        color: #333;
    }
    
    .prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent; /* Remove black background */
    color: purple; /* Change arrow color to purple */
    padding: 15px; /* Increase padding for larger size */
    border: none;
    cursor: pointer;
    z-index: 2; /* Ensure buttons are above videos */
    font-size: 50px; /* Increase font size */
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
        <!-- Replace the following iframe src with the embed link of the playlist -->
        <div class="video-item">
            <iframe src="URL_OF_VIDEO_1" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 1</div>
        </div>
        <div class="video-item">
            <iframe src="URL_OF_VIDEO_2" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 2</div>
        </div>
        <div class="video-item">
            <iframe src="URL_OF_VIDEO_3" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 3</div>
        </div>
    </div>

    <button class="next" onclick="scrollVideos(1)">❯</button>
</div>

<script>
    function scrollVideos(direction) {
        const videoContainer = document.querySelector('.video-container');
        const videoRow = document.querySelector('.video-row');
        const videoItems = document.querySelectorAll('.video-item');
        const numVideos = videoItems.length;
        const videoWidth = videoItems[0].offsetWidth + parseInt(window.getComputedStyle(videoItems[0]).marginRight);
        const containerWidth = numVideos * videoWidth;

        let newPosition = -parseInt(window.getComputedStyle(videoRow).transform.split(',')[4]);
        newPosition += direction * videoWidth;

        if (newPosition < 0) {
            newPosition = 0;
        } else if (newPosition > containerWidth - videoContainer.offsetWidth) {
            newPosition = containerWidth - videoContainer.offsetWidth;
        }

        videoRow.style.transform = `translateX(-${newPosition}px)`;
    }
</script>

</body>
</html>

