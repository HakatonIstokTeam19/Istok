import initScrollToView from "../shared/scrollToViewByClick.js";
import handleScroll from "../shared/handleScroll.js";
import handleResize from "../shared/handleResize.js";

window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  console.log(container);

  if (container) {
    const resizeHandler = () => handleResize(container);
    const scrollHandler = () => handleScroll(container);
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    scrollHandler();
  } else console.debug("No container found");

  initScrollToView();
});
