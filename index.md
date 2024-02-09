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
        overflow: hidden;
        white-space: nowrap;
        position: relative;
        margin-bottom: 20px;
    }

    .playlist-wrapper {
        display: flex;
    }

    .playlist-slide {
        flex: 0 0 auto;
        width: 100%;
        transition: transform 0.5s ease;
        text-align: center;
    }

    .playlist-video {
        width: 300px;
        height: 169px;
        margin-right: 10px;
    }

    .playlist-title {
        margin-top: 10px;
    }

    .scroll-arrow-container {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 1;
    }

    .scroll-arrow {
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        padding: 10px;
        cursor: pointer;
    }
</style>
</head>
<body>

<div class="playlist-container">
    <div class="scroll-arrow-container">
        <div class="scroll-arrow scroll-arrow-left">&lt;</div>
        <div class="scroll-arrow scroll-arrow-right">&gt;</div>
    </div>
    <div class="playlist-wrapper">
        <div class="playlist-slide">
            <!-- Add videos from the playlist here -->
            <iframe class="playlist-video" width="300" height="169" src="https://www.youtube.com/embed/RYxe61jE_J8"></iframe>
            <div class="playlist-title">Title of the First Video</div>
            <!-- Add more iframes and titles for each video in the playlist -->
        </div>
        <!-- Add more .playlist-slide divs for additional videos -->
    </div>
</div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const slides = document.querySelectorAll(".playlist-slide");
        const scrollLeft = document.querySelector(".scroll-arrow-left");
        const scrollRight = document.querySelector(".scroll-arrow-right");

        let currentIndex = 0;

        function updateArrows() {
            scrollLeft.style.display = currentIndex > 0 ? "block" : "none";
            scrollRight.style.display = currentIndex < slides.length - 1 ? "block" : "none";
        }

        function scrollToIndex(index) {
            const containerWidth = slides[0].offsetWidth;
            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(${(i - index) * containerWidth}px)`;
            });
            currentIndex = index;
            updateArrows();
        }

        scrollLeft.addEventListener("click", function() {
            if (currentIndex > 0) {
                scrollToIndex(currentIndex - 1);
            }
        });

        scrollRight.addEventListener("click", function() {
            if (currentIndex < slides.length - 1) {
                scrollToIndex(currentIndex + 1);
            }
        });

        updateArrows();
    });
</script>

</body>
</html>