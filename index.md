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
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: nowrap;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
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
</style>
</head>
<body>
<div class="video-container">
    <div class="video-item"><iframe src="URL_OF_VIDEO_1" frameborder="0" allowfullscreen></iframe></div>
    <div class="video-item"><iframe src="URL_OF_VIDEO_2" frameborder="0" allowfullscreen></iframe></div>
    <div class="video-item"><iframe src="URL_OF_VIDEO_3" frameborder="0" allowfullscreen></iframe></div>
    <div class="video-item"><iframe src="URL_OF_VIDEO_4" frameborder="0" allowfullscreen></iframe></div>
    <div class="video-item"><iframe src="URL_OF_VIDEO_5" frameborder="0" allowfullscreen></iframe></div>
    <div class="video-item"><iframe src="URL_OF_VIDEO_6" frameborder="0" allowfullscreen></iframe></div>
    <div class="video-item"><iframe src="URL_OF_VIDEO_7" frameborder="0" allowfullscreen></iframe></div>
    <div class="video-item"><iframe src="URL_OF_VIDEO_8" frameborder="0" allowfullscreen></iframe></div>
</div>
</body>
</html>