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
<title>Embedded YouTube Playlist</title>
<style>
    .playlist-container {
        overflow-x: hidden;
        white-space: nowrap;
        position: relative;
        margin-bottom: 20px;
    }

    .playlist-video {
        display: inline-block;
        width: 300px;
        height: 169px;
        margin-right: 10px;
    }

    .scroll-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        padding: 10px;
        cursor: pointer;
    }

    .scroll-arrow-left {
        left: 0;
    }

    .scroll-arrow-right {
        right: 0;
    }
</style>
</head>
<body>

<div class="playlist-container">
    <!-- Add each video from the playlist here -->
    <iframe class="playlist-video" width="300" height="169" src="https://www.youtube.com/embed/RYxe61jE_J8"></iframe>
    <!-- Add more iframes for each video in the playlist -->
</div>

<div class="scroll-arrow scroll-arrow-left">&lt;</div>
<div class="scroll-arrow scroll-arrow-right">&gt;</div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const container = document.querySelector(".playlist-container");
        const videos = document.querySelectorAll(".playlist-video");
        const scrollLeft = document.querySelector(".scroll-arrow-left");
        const scrollRight = document.querySelector(".scroll-arrow-right");

        let currentIndex = 0;

        function updateArrows() {
            scrollLeft.style.display = currentIndex > 0 ? "block" : "none";
            scrollRight.style.display = currentIndex < videos.length - 1 ? "block" : "none";
        }

        function scrollToIndex(index) {
            const videoWidth = videos[0].offsetWidth;
            container.scrollLeft = index * (videoWidth + 10); // Considering margin-right
            currentIndex = index;
            updateArrows();
        }

        scrollLeft.addEventListener("click", function() {
            if (currentIndex > 0) {
                scrollToIndex(currentIndex - 1);
            }
        });

        scrollRight.addEventListener("click", function() {
            if (currentIndex < videos.length - 1) {
                scrollToIndex(currentIndex + 1);
            }
        });

        updateArrows();
    });
</script>

</body>
</html>