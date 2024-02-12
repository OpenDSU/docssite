---
title: Home
layout: home
nav_order: 1
---


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
        padding-left: 50px; /* Adjust space before videos */
        padding-right: 50px; /* Adjust space after videos */
        margin: 0 auto; /* Center the video slider */
        width: calc(100% - 100px); /* Adjust width of the video slider (100px for paddings) */
        overflow-x: hidden; /* Hide the overflowing videos */
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
            <iframe src="https://www.youtube.com/embed/videoseries?list=UULFWBkFj-M52u1UywvGOOVrkg" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 1</div>
        </div>
        <div class="video-item">
            <iframe src="https://www.youtube.com/embed/videoseries?list=UULFWBkFj-M52u1UywvGOOVrkg" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 1</div>
        </div>
        <div class="video-item">
            <iframe src="https://www.youtube.com/embed/videoseries?list=UULFWBkFj-M52u1UywvGOOVrkg" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 1</div>
        </div>
        <div class="video-item">
            <iframe src="https://www.youtube.com/embed/videoseries?list=UULFWBkFj-M52u1UywvGOOVrkg" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 1</div>
        </div>
        <div class="video-item">
            <iframe src="https://www.youtube.com/embed/videoseries?list=UULFWBkFj-M52u1UywvGOOVrkg" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 1</div>
        </div>
        <div class="video-item">
            <iframe src="URL_OF_VIDEO_2" frameborder="0" allowfullscreen></iframe>
            <div class="video-name">Name of Video 2</div>
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
        const containerWidth = document.querySelector('.video-container').offsetWidth;
        const visibleVideos = 3; // Number of visible videos

        // Calculate the maximum number of videos that can be shown
        const maxVideos = Math.min(numVideos, visibleVideos);

        // Calculate the width of the visible area
        const visibleWidth = videoWidth * maxVideos;

        // Calculate the maximum position to stop before the next arrow
        const maxPosition = containerWidth - visibleWidth;

        // Update the current index based on the direction
        currentIndex = (currentIndex + direction + numVideos) % numVideos;

        // Calculate the new position for the video row
        let newPosition = -currentIndex * videoWidth;

        // Ensure the new position doesn't exceed the maximum position
        newPosition = Math.min(newPosition, 0);
        newPosition = Math.max(newPosition, maxPosition);

        // Apply the transform to the video row
        videoRow.style.transform = `translateX(${newPosition}px)`;
    }
    </script>


</body>
</html>
