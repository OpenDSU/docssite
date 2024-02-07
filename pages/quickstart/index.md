---
layout: default
title: OpenDSU Quick Start
nav_order: 9
has_children: true
---

<head>
<style>
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
  }
  .modal-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 90%;
  }
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
  }
</style>
</head>
<body>



<div style="display: flex; justify-content: center;">
  <img 
    src="" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="document.getElementById('myModal').style.display='block';document.getElementById('img01').src=this.src;"
    alt="Zoomable Image"
  />
</div>

<!-- The Modal -->
<div id="myModal" class="modal" onclick="this.style.display='none'">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01" style="cursor: zoom-out;">
</div>

<div style="text-align:center;"> 
    <p><b></b></p>
</div>

</body>