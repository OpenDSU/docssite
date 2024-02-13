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
<title>YouTube Video Cards Slideshow</title>
<style>
    .slideshow {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .card {
        flex: 0 0 calc(33.33% - 20px);
        margin: 10px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    iframe {
        width: 100%;
        height: 200px;
    }
</style>
</head>
<body>

<div class="slideshow">
    <div class="card">
        <h2>Video 1</h2>
        <iframe src="https://www.youtube.com/embed/VIDEO_ID_1" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="card">
        <h2>Video 2</h2>
        <iframe src="https://www.youtube.com/embed/VIDEO_ID_2" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="card">
        <h2>Video 3</h2>
        <iframe src="https://www.youtube.com/embed/VIDEO_ID_3" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="card">
        <h2>Video 4</h2>
        <iframe src="https://www.youtube.com/embed/VIDEO_ID_4" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="card">
        <h2>Video 5</h2>
        <iframe src="https://www.youtube.com/embed/VIDEO_ID_5" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="card">
        <h2>Video 6</h2>
        <iframe src="https://www.youtube.com/embed/VIDEO_ID_6" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

</body>
</html>
