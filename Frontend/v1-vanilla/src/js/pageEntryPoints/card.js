function sliderCard() {
  let activeSlide = 0;
  const sliderArrows = document.querySelectorAll(".main__product-image-line");
  const slides = document.querySelectorAll(".main__product-images");
  let slideslength = slides.length;
  sliderArrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
      slides[activeSlide].classList.remove("active");
      sliderArrows[activeSlide].classList.remove("active");

      activeSlide = index;

      sliderArrows[activeSlide].classList.add("active");
      slides[activeSlide].classList.add("active");
    });
  });
  console.log(slideslength);
}

document.addEventListener("DOMContentLoaded", () => {
  sliderCard();
});
