---
title: Home
layout: home
nav_order: 1
---

---
title: Home
layout: home
nav_order: 1
---


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
            margin-left: 0px;
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
        <div class="cardContainer">
            <div class="card">
               <iframe width="218.27" height="150.6" src="https://www.youtube.com/embed/HCkeFXyeJxg?si=ZpnXwsa9qghC2OMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            <div class="card">
                <iframe width="218.27" height="150.6" src="https://www.youtube.com/embed/HCkeFXyeJxg?si=ZpnXwsa9qghC2OMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            <div class="card">
                <iframe width="218.27" height="150.6" src="https://www.youtube.com/embed/HCkeFXyeJxg?si=ZpnXwsa9qghC2OMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            <div class="card">
                <iframe width="218.27" height="150.6" src="https://www.youtube.com/embed/HCkeFXyeJxg?si=ZpnXwsa9qghC2OMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
        </div>
    </main>
</body>
</html>
