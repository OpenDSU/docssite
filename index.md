---
title: Home
layout: home
nav_order: 1
---


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Carousel</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        *{
            padding: 0;
            margin: 0;
        }

        main{
            background: linear-gradient(-45deg, #fc5c7d, #6a82fb);
            height: 100vh;
        }

        .heading{
            color: white;
            text-align: center;
            font-family: system-ui;
            padding-top: 50px;
        }

        .cardContainer{
            display: flex;
            gap: 8px;
            align-items: center;
            justify-content: center;
            margin-top: 100px;
        }

        .card{
            position: relative;
            left: 0px;
            width: 150px;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        }

        .card img {
            width: 100%;
            border-radius: 10px;
            box-shadow: -7px -1px 11px 8px rgba(00,00,00,0.2);
        }

        .card:not(:first-child){
            margin-left: -50px;
        }

        .card:hover{
            transform: translateY(-20px);
        }

        .card:hover ~ .card{
            left: 50px;
        }
    </style>
</head>
<body>
    <main>
        <div class="heading">
            <h1 class="title">Card Carousel</h1>
        </div>

        <div class="cardContainer">
            <div class="card">
                <img src="https://assets.sorare.com/cardsamplepicture/6b0a07eb-3f2d-4b07-8736-00c12bffe945/picture/tinified-3b4ed56aac2b0255afdd503ed6003513.png" alt="">
            </div>
            <div class="card">
                <img src="https://assets.sorare.com/image-resize/cardsamplepicture/4a68833c-c4a5-4bf8-97cf-32fad77016a2/picture/tinified-8a4f1c0618e4282890610c78a37bcd29.png?width=640" alt="">
            </div>
            <div class="card">
                <img src="https://assets.sorare.com/image-resize/cardsamplepicture/a5970520-bc53-4c22-9854-28b238f97a2f/picture/tinified-036757aec2340e0ea198006e14674a7e.png?width=640" alt="">
            </div>
            <div class="card">
                <img src="https://assets.sorare.com/image-resize/cardsamplepicture/ccb9c8cb-cfe6-414d-bc1e-a3960dfd6232/picture/tinified-4a6382b2a37ad2c0c08e056c95b96888.png?width=640" alt="">
            </div>
        </div>
    </main>
</body>
</html>
