import { handleResize } from "./src/js/scroll.js";
// import {
//   contact,
//   arrowContact,
//   linksContact,
//   pointerContact,
// } from "./src/js/constants.js";

window.addEventListener("resize", handleResize);
handleResize();
const contact = document.querySelector(".main__contact");
const arrowContact = document.querySelector(".main__contact-pointer");
const linksContact = document.querySelector(".main__contact-links");
const pointerContact = document.querySelector(".main__contact-arrow");

console.log("contact:", contact);
console.log("arrowContact:", arrowContact);
console.log("linksContact:", linksContact);
console.log("pointerContact:", pointerContact);

document.addEventListener("DOMContentLoaded", () => {
  contact.addEventListener("click", () => {
    contact.classList.add("clicked");
    console.log(contact);
    linksContact.style.display = "flex";
    pointerContact.style.display = "flex";
  });

  arrowContact.addEventListener("click", () => {
    arrowContact.style.transform = "rotate(180deg)";
    contact.classList.remove("clicked");
    console.log(contact);
    linksContact.style.display = "none";
    pointerContact.style.display = "none";
  });
});
