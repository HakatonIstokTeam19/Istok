// slide-out side menu
export default function initSideMenu() {
  const contactHead = document.querySelector(".main__contact h2");
  const contact = document.querySelector(".main__contact");
  const linksContact = document.querySelector(".main__contact-links");
  const pointerContact = document.querySelector(".main__contact-arrow");

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
}
