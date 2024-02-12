---
title: Home
layout: home
nav_order: 1
---
test
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background-image: 
                linear-gradient(
                    to top right, #8B5CF6, #EC4899
                );
            min-height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: monospace;
        }
        .slider {
            position: relative;
            width: 100%;
            height: 370px;
            overflow: hidden;
        }
        .item {
            position: absolute;
            width: 200px;
            height: 320px;
            text-align: justify;
            background-color: #fff;
            border-radius: 10px;
            padding: 20px;
            transition: 0.5s;
            left: calc(50% - 110px);
            top: 0;
        }
        #next, #prev {
            position: absolute;
            top: 40%;
            color: #fff;
            background-color: transparent;
            border: none;
            font-size: xxx-large;
            font-family: monospace;
            font-weight: bold;
            left: 400px;
        }
        #next {
            left: unset;
            right: 400px;
        }
    </style>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <div class="slider">
        <div class="item">
            <h1>Slide 1</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
        </div>
        <div class="item">
            <h1>Slide 2</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
        </div>
        <div class="item">
            <h1>Slide 3</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
        </div>
        <div class="item">
            <h1>Slide 4</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
        </div>
        <div class="item">
            <h1>Slide 5</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
        </div>
        <div class="item">
            <h1>Slide 6</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
        </div>
        <div class="item">
            <h1>Slide 7</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
        </div>
        <button id="next">></button>
        <button id="prev"><</button>
    </div>

    <script src="app.js"></script>
</body>
</html>
