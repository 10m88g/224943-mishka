var link = document.querySelector(".item__button-order");
var linkbasket = document.querySelectorAll(".catalog__item-order");

var popup = document.querySelector(".modal");
var overlay = document.querySelector(".modal__overlay");

  if (link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.add("modal__show");
    });
  };

  if (overlay) {
    overlay.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.remove("modal__show");
    });
  };

for (var i = 0; i < linkbasket.length; i++) {
  linkbasket[i].addEventListener("click", function(event) {
    event.preventDefault();
      if (popup) {
        popup.classList.add("modal__show");
      }
  });
};

