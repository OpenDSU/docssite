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
    <title>Video Slider</title>
    <!-- Glider CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glider-js@1.7.9/glider.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        .glider {
            overflow: hidden;
            white-space: nowrap;
        }
        
        .glider video {
            width: 100%;
            max-width: 300px; /* Adjust as needed */
            display: inline-block;
            vertical-align: top;
        }
    </style>
</head>
<body>
    <div class="glider">
        <video controls>
            <source src="video1.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <video controls>
            <source src="video2.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <!-- Add more <video> elements for each video -->
    </div>

    <!-- Glider JS -->
    <script src="https://cdn.jsdelivr.net/npm/glider-js@1.7.9/glider.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            new Glider(document.querySelector('.glider'), {
                slidesToShow: 3,
                slidesToScroll: 1,
                draggable: true,
                dots: '.dots',
                arrows: {
                    prev: '.glider-prev',
                    next: '.glider-next'
                }
            });
        });
    </script>
</body>
</html>
