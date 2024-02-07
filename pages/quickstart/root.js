// Define the CSS styles as a JavaScript string
var modalStyles = `
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
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
`;

// Create a style element
var styleElement = document.createElement('style');

// Set the CSS styles as the content of the style element
styleElement.textContent = modalStyles;

// Append the style element to the document head
document.head.appendChild(styleElement);

// Function to open the modal
function openModal(imgSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = imgSrc;
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}