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
    <title>Pure CSS Image Slider</title>
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
            display: flex;
            flex-direction: column;
            align-items: center;
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
        .slider img{
            flex: 1 0 100%;
            scroll-snap-align: start;
            object-fit: cover;
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
        .nav img{
            width: 100%;
            object-fit: cover;
        }
        .nav a:hover{
            opacity: 1;
        }
        .small-cards {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }
        .small-card {
            width: 150px;
            height: 100px;
            background-color: lightgray;
            border-radius: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="wrapper">
            <div class="slider">
                <img id="slide-1" src="1.jpg" alt="">
                <img id="slide-2" src="2.jpg" alt="">
                <img id="slide-3" src="3.jpg" alt="">
                <img id="slide-4" src="4.jpg" alt="">
            </div>
            <div class="nav">
                <a href="#slide-1">
                    <img src="1.jpg" alt="">
                </a>
                <a href="#slide-2">
                    <img src="2.jpg" alt="">
                </a>
                <a href="#slide-3">
                    <img src="3.jpg" alt="">
                </a>
                <a href="#slide-4">
                    <img src="4.jpg" alt="">
                </a>
            </div>
            <div class="small-cards">
                <div class="small-card">Card 1</div>
                <div class="small-card">Card 2</div>
                <div class="small-card">Card 3</div>
                <div class="small-card">Card 4</div>
            </div>
        </div>
    </div>
</body>
</html>

