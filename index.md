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
  <title>App Builder Carousel</title>
  <style>
    body {
      background-color: #27496E;
      font-family: 'Raleway', sans-serif;
    }
    .appBuilder-carousel {
      margin-bottom: 64px;
      margin-top: 56px;
    }
    .carousel {
      .carousel-indicators {
        width: 76%;
        li {
          border: none;
          background-color: #98ACB9;
          height: 18px;
          margin-right: 28px;
          width: 18px;
          &.active {
            background-color: #50E3C2;
          }
        }
      }
      .carousel-inner {
        .item {
          h3 {
            font-weight: 700;
            font-size: 25px;
            color: #FFFFFF;
            letter-spacing: 0.89px;
            line-height: 38.41px;
            margin-bottom: 50px;
            margin-top: 30px;
            position: relative;
            &::after {
              background-color: #FFFFFF;
              bottom: -18px;
              content: "";
              height: 6px;
              left: 0;
              position: absolute; 
              width: 158px;
            }
          }
          h4 {
            font-weight: 700;
            font-size: 25px;
            color: #43EEC5;
            letter-spacing: 1.02px;
            line-height: 33px;
          }
        }
      }
    }
  </style>
</head>
<body>
  <div class="container appBuilder-carousel">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <div class="row">
            <div class="col-md-6">
              <a class="popup-youtube" href="https://www.youtube.com/watch?v=Zrcp4bQZCXE?autoplay=1&rel=0&controls=1&showinfo=0&wmode=transparent">
                <img  class="img-responsive" src="https://s3.amazonaws.com/cdn.qrvey.com/marketing-img/unbounce/appbuilder1.png" alt="builder app video" />              
              </a>
            </div>
            <div class="col-md-6">
              <h3>
                Learn how to quickly <br/> 
                enhance your website <br/>
                with these 3 how-to videos.
              </h3>
              <h4>
                Send the Perfect <br/>
                Follow-up.
              </h4>
            </div>
          </div>
        </div>
        
        <div class="item">
          <div class="row">
            <div class="col-md-6">
              <a class="popup-youtube" href="https://www.youtube.com/watch?v=7fJeMfFcpUU?t=145s&autoplay=1&rel=0&controls=1&showinfo=0&wmode=transparent">
                <img  class="img-responsive" src="https://s3.amazonaws.com/cdn.qrvey.com/marketing-img/unbounce/appbuilder2.png" alt="builder app video" />              
              </a>
            </div>
            <div class="col-md-6">
              <h3>
                Learn how to quickly <br/> 
                enhance your website <br/>
                with these 3 how-to videos.
              </h3>
              <h4>
                Add Smart Form.
              </h4>
            </div>
          </div>
        </div>
        
        <div class="item">
          <div class="row">
            <div class="col-md-6">
              <a class="popup-youtube" href="https://www.youtube.com/watch?v=PcbP1fdXEgA?feature=youtu.be&autoplay=1&rel=0&controls=1&showinfo=0&wmode=transparent">
                <img  class="img-responsive" src="https://s3.amazonaws.com/cdn.qrvey.com/marketing-img/unbounce/appbuilder3.png" alt="builder app video" />         
              </a>
            </div>
            <div class="col-md-6">
              <h3>
                Learn how to quickly <br/> 
                enhance your website <br/>
                with these 3 how-to videos.
              </h3>
              <h4>
                Gather Instant Feedback.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- JavaScript Libraries -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
  <script>
    $(document).ready(function() {
      $('.popup-youtube, .popup-text').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
      });
    });
  </script>
</body>
</html>
