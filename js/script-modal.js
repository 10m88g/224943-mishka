var link = document.querySelector(".item__button-order");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

for(var i=0;i<Link.length;i++) {
  Link[i].addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal__show");
    overlay.classList.add("overlay__show");
  });

  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal__show");
    overlay.classList.remove("overlay__show");
});
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal__show")) {
    popup.classList.remove("modal__show");
    }
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (overlay.classList.contains("overlay__show")) {
    overlay.classList.remove("overlay__show");
    }
  }
});
