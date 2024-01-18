import { setupCarousel } from "./setupCarousel.js";
import { shopping } from "./shopping.js";

function init() {
  const heart = document.querySelector("#heart");
  heart.addEventListener("click", () => {
    heart.classList.toggle("active");
  });
  setupCarousel();
  shopping();
}

init();
