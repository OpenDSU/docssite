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
    <link rel="stylesheet" href="style.css">
    <title>Pure CSS Video Slider</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .container{
            padding: 2rem;
        }

        .wrapper{
            position: relative;
            max-width: 48rem;
            margin: 0 auto;
        }

        .slider{
            display: flex;
            aspect-ratio: 16/9;
            overflow: hidden;
            width: 100%;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            box-shadow: 0 1.5rem 3rem -0.75rem rgba(0,0,0,0.25);
            border-radius: 0.5rem;
        }

        .slider iframe{
            flex: 1 0 100%;
            scroll-snap-align: start;
            border: none;
        }
        
        .nav{
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 1rem;    
        }

        .nav a{
            width: 7rem;
            height: 4rem;
            border-radius: .5rem;
            overflow: hidden;
            opacity: .7;
            transition: opacity ease 250ms;
            box-shadow: 0 1rem 1rem -0.75rem rgba(0,0,0,0.75);
        }

        .nav iframe{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .nav a:hover{
            opacity: 1;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="wrapper">
            <div class="slider">
                <iframe width="218.27" height="300" src="https://www.youtube.com/embed/0A3bGUAajrM?si=3wLGPS6KBAfaJLVF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe id="slide-2" src="https://www.youtube.com/embed/VIDEO_ID_2" frameborder="0" allowfullscreen></iframe>
                <iframe id="slide-3" src="https://www.youtube.com/embed/VIDEO_ID_3" frameborder="0" allowfullscreen></iframe>
                <iframe id="slide-4" src="https://www.youtube.com/embed/VIDEO_ID_4" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="nav">
                <a href="#slide-1">
                <iframe width="218.27" height="300" src="https://www.youtube.com/embed/0A3bGUAajrM?si=3wLGPS6KBAfaJLVF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </a>
                <a href="#slide-2">
                    <iframe src="https://www.youtube.com/embed/VIDEO_ID_2" frameborder="0" allowfullscreen></iframe>
                </a>
                <a href="#slide-3">
                    <iframe src="https://www.youtube.com/embed/VIDEO_ID_3" frameborder="0" allowfullscreen></iframe>
                </a>
                <a href="#slide-4">
                    <iframe src="https://www.youtube.com/embed/VIDEO_ID_4" frameborder="0" allowfullscreen></iframe>
                </a>
            </div>
        </div>
    </div>
</body>
</html>
