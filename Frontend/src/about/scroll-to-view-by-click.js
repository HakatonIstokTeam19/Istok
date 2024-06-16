function scrollToItem(itemId) {
  const element = document.getElementById(itemId);
  element.scrollIntoView({
    behavior: "smooth",
    alignToTop: false,
    block: "end",
  });
}

const controls = document.querySelectorAll(".slide-controls__btn");
controls.forEach((control, index) => {
  control.addEventListener("click", () => {
    const sectionId = control.getAttribute("data-related-section-id");
    if (sectionId) {
      scrollToItem(sectionId);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".main-content");
  const textBlock = document.getElementById("text-block");
  const textContent = textBlock.querySelector(".text-block__content");
  const sections = document.querySelectorAll(".slide");

  const options = {
    root: root,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const newContent = entry.target.querySelector(
          ".slide__content_hidden"
        ).innerHTML;

        if (textContent.innerHTML !== newContent) {
          textContent.innerHTML = newContent;
          textBlock.classList.add("fade");
          textContent.style.opacity = 0;
          setTimeout(() => {
            textBlock.classList.remove("fade");
          }, 500);
          setTimeout(() => {
            textContent.style.opacity = 1;
          }, 700);
          // change width of text block for brand section
          if (entry.target.id === "brand") {
            textBlock.style.width = "auto";
          } else {
            textBlock.style.width = "385px";
          }
        }
        const sectionId = entry.target.id;
        controls.forEach((control) => {
          const controlCircle = control.querySelector(".slide-control__circle");
          if (
            control.getAttribute("data-related-section-id") === sectionId ||
            (sectionId === "values_2" &&
              control.getAttribute("data-related-section-id") === "values")
          ) {
            controlCircle.classList.add("slide-control__circle_active");
          } else {
            controlCircle.classList.remove("slide-control__circle_active");
          }
        });
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
