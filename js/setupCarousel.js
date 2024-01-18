document.addEventListener("DOMContentLoaded", setupCarousel);

export function setupCarousel() {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const carouselContainer = document.querySelector(".carousel-container");
  const showCard = document.querySelector(".select img");
  const cards = document.querySelectorAll(".carousel-container img");

  prevButton.addEventListener("click", () => scrollCarousel(-200));
  nextButton.addEventListener("click", () => scrollCarousel(200));

  cards.forEach(addClickEvent);
  cards.forEach(addCardClickEvent);

  function scrollCarousel(amount) {
    carouselContainer.scrollLeft += amount;
  }

  function addClickEvent(image) {
    image.addEventListener("click", () => centerImage(image));
  }

  function centerImage(clickedImage) {
    const container = clickedImage.closest(".carousel-container");
    const containerWidth = container.clientWidth;
    const imageWidth = clickedImage.clientWidth;
    const imageOffset = clickedImage.offsetLeft;

    const scrollAmount = imageOffset - containerWidth / 2 + imageWidth / 2;

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  function addCardClickEvent(card) {
    card.addEventListener("click", () => updateShowCard(card));
  }

  function updateShowCard(card) {
    showCard.src = card.src;
    removeGrayscale();
    card.classList.add("remove-grayscale");
  }

  function removeGrayscale() {
    cards.forEach((card) => card.classList.remove("remove-grayscale"));
  }
}
