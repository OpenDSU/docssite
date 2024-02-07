// root.js

function openModal(imgSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imgSrc;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}