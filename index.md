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
  <title>Video Carousel</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-V4I9nnAaRl6vtwXC1FgeP5VLPf7gJ6Y98zZHi1Y9qKWVMOmX41vpd4jg1ih0lKCK" crossorigin="anonymous">
  <style>
    .carousel-item {
      text-align: center;
    }
    .video-card {
      border-radius: 10px;
      overflow: hidden;
    }
    .video-card img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>

<div id="videoCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="video-card">
            <video controls>
              <source src="video1.mp4" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="col-md-4">
          <div class="video-card">
            <video controls>
              <source src="video2.mp4" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="col-md-4">
          <div class="video-card">
            <video controls>
              <source src="video3.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="video-card">
            <video controls>
              <source src="video4.mp4" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="col-md-4">
          <div class="video-card">
            <video controls>
              <source src="video5.mp4" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="col-md-4">
          <div class="video-card">
            <video controls>
              <source src="video6.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#videoCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#videoCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<!-- Bootstrap JS and dependencies -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-vVNwLqfF2Fln3WLNu0+29lW9vtoMJdJt5lWp80HME5tQoO27vkJfyn2u5I5+8+Mz" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-3OX5nfn3h+Ou+JvXmsce/JzV5J+QolhlwMa24lhi9YyaWfFZSx3g1jDrRg5p4zQg" crossorigin="anonymous"></script>
</body>
</html>
