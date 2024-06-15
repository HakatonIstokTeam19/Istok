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

console.log("contact:", contact);
console.log("linksContact:", linksContact);
console.log("pointerContact:", pointerContact);

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
