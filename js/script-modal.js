
var layer = document.querySelector(".item__button-overlay");
var overlay = document.querySelector(".overlay");
var close = overlay.querySelector(".modal__close");

layer.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("overlay__show");
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("overlay__show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (overlay.classList.contains("overlay__show")) {
    overlay.classList.remove("overlay__show");
    }
  }
});

var link = document.querySelector(".item__button-order");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal__show");
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal__show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal__show")) {
    popup.classList.remove("modal__show");
    }
  }
});
