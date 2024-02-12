---
title: Home
layout: home
nav_order: 1
---


<!DOCTYPE html>
<html lang="en">
<head>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Owl Carousel with YouTube Videos</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
<link rel="stylesheet" href="https://cdn.plyr.io/3.6.8/plyr.css">

<style>
.video-section .item {
    opacity: 0.4;
    transition: 0.4s ease all;
    margin: 0 20px;
    transform: scale(0.8);
}

@media (max-width: 1000px) {
    .video-section .item {
        margin: 0;
        transform: scale(0.9);
    }
}

.video-section .active .item {
    opacity: 1;
    transform: scale(1);
}

body {
    margin: 80px 0 0 0;
}

.video-section .owl-item {
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1.0, 1.0);
}

.video-section video {
    max-width: 100%;
    height: auto;
}
</style>
</head>
<body>

<div class="owl-carousel video-section">
    <div class="item">
        <div class="js-player" data-video-id="VIDEO_ID_HERE"></div>
    </div>
    <div class="item">
        <div class="js-player" data-video-id="VIDEO_ID_HERE"></div>
    </div>
    <div class="item">
        <div class="js-player" data-video-id="VIDEO_ID_HERE"></div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script src="https://cdn.plyr.io/3.6.8/plyr.polyfilled.min.js"></script>

<script>
$('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:10,
    items:1,
    nav:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 60
        },
        600:{
            items:1,
            stagePadding: 100
        },
        1000:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 250
        },
        1400:{
            items:1,
            stagePadding: 300
        },
        1600:{
            items:1,
            stagePadding: 350
        },
        1800:{
            items:1,
            stagePadding: 400
        }
    }
});

var playerSettings = {
    controls : ['play-large'],
    fullscreen : { enabled: false},
    resetOnEnd : true,
    hideControls  :true,
    clickToPlay:true,
    keyboard : false,
}

const players = [];

function onYouTubeIframeAPIReady() {
    $('.js-player').each(function(index, element) {
        players[index] = new YT.Player(element, {
            videoId: $(element).data('video-id'),
            playerVars: {
                'autoplay': 0,
                'controls': 0,
                'modestbranding': 1,
                'rel': 0,
                'playsinline': 1
            },
            events: {
                'onStateChange': function(event) {
                    if (event.data == YT.PlayerState.PLAYING) {
                        players.forEach(function(instance, idx) {
                            if (idx !== index) {
                                instance.pauseVideo();
                            }
                        });
                    }
                }
            }
        });
    });
}

$('.video-section').on('translated.owl.carousel', function(event) {
    players.forEach(function(instance) {
        instance.pauseVideo();
    });
});
</script>

<script src="https://www.youtube.com/iframe_api"></script>

</body>
</html>
