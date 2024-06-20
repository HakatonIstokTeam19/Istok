import { handleResize } from "./src/js/scroll.js";
// import {
//   contact,
//   arrowContact,
//   linksContact,
//   pointerContact,
// } from "./src/js/constants.js";

window.addEventListener("resize", handleResize);
handleResize();

const contactHead = document.querySelector(".main__contact h2");
const contact = document.querySelector(".main__contact");
const linksContact = document.querySelector(".main__contact-links");
const pointerContact = document.querySelector(".main__contact-arrow");

document.addEventListener("DOMContentLoaded", () => {
  contactHead.addEventListener("click", () => {
    contact.classList.add("clicked");
    linksContact.style.display = "flex";
    pointerContact.style.display = "flex";
  });

  pointerContact.addEventListener("click", () => {
    contact.classList.remove("clicked");
    linksContact.style.display = "none";
    pointerContact.style.display = "none";
  });
});

// slider 3 - materials

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.page4__slider-btn');
  const images = document.querySelectorAll('.page4__image');
  const textBlocks = document.querySelectorAll('.page4__slide-txt-block-list');

  // Set the default active elements
  const defaultCategory = 'frames';
  document.querySelector(`.page4__slider-btn[data-category="${defaultCategory}"]`).classList.add('active');
  document.querySelector(`.page4__image[data-related-category="${defaultCategory}"]`).classList.add('active');
  document.querySelector(`.page4__slide-txt-block-list[data-related-category="${defaultCategory}"]`).classList.add('active');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      buttons.forEach(btn => btn.classList.remove('active'));
      images.forEach(image => image.classList.remove('active'));
      textBlocks.forEach(block => block.classList.remove('active'));

      button.classList.add('active');

      document.querySelector(`.page4__image[data-related-category="${category}"]`).classList.add('active');
      document.querySelector(`.page4__slide-txt-block-list[data-related-category="${category}"]`).classList.add('active');
    });
  });
});


