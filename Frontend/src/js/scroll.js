const container = document.querySelector(".container");

export const handleResize = () => {
  if (window.innerWidth <= 768) {
    container.style.flexDirection = "column";
    container.style.overflowY = "auto";
    container.style.overflowX = "hidden";
  } else {
    container.style.flexDirection = "row";
    container.style.overflowY = "hidden";
    container.style.overflowX = "auto";
  }
};

container.addEventListener("wheel", (e) => {
  if (window.innerWidth > 768) {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  }
});
