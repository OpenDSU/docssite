# Zoomable Image

```css
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
<div style="text-align:center;"> 
    <p><b>Figure X: TITLU</b></p>
</div>
<div style="display: flex; justify-content: center;">
    ![Zoomable Image](https://docs.google.com/drawings/d/e/2PACX-1vRZQSJCXgkodxmMj5AE_xvp9uVFIGfGFAtS9na-i3hwNMAjyY0LXQs43hYhp4HcEUHl-iNIlm2KnuxS/pub?w=1352&h=686){: style="max-width: 69%; cursor: pointer; transition: max-width 0.3s ease-in-out;" onclick="document.getElementById('myModal').style.display='block';document.getElementById('img01').src=this.src;"}
</div>
<div id="myModal" class="modal" onclick="this.style.display='none'">
    <span class="close">&times;</span>
    ![Zoomable Image](https://docs.google.com/drawings/d/e/2PACX-1vRZQSJCXgkodxmMj5AE_xvp9uVFIGfGFAtS9na-i3hwNMAjyY0LXQs43hYhp4HcEUHl-iNIlm2KnuxS/pub?w=1352&h=686){: class="modal-content" style="cursor: zoom-out;"}
</div>
```