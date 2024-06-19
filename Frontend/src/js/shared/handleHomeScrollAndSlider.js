export default function initHomeScrollAndSlider1(container) {
  const projects = document.getElementById("projects");
  const sliderInnerContainer = document.querySelector(
    ".page3__slider-inner-container"
  );

  const projectSectionStopScrollPosition = 466;
  let sliderActive = false;
  //transformX values of the slider to set the range of motion
  const initialTransformX = 493;
  const minTransform = -567;
  const maxTransform = initialTransformX;

  function handleScroll(e) {
    if (window.innerWidth > 768) {
      const projectsRect = projects.getBoundingClientRect();

      if (
        !sliderActive &&
        projectsRect.left <= projectSectionStopScrollPosition
      ) {
        // Main page stops scrolling, slider starts moving
        sliderActive = true;
        // startScrollLeft = container.scrollLeft;
        e.preventDefault();
      }

      if (sliderActive) {
        e.preventDefault(); // Prevent the default scroll behavior
        const delta = e.deltaY;
        const currentTransform = getCurrentTransformX(sliderInnerContainer);
        let newTransform = currentTransform - delta;

        // check if the slider has reached its start or end
        if (newTransform < minTransform) {
          newTransform = minTransform;
        } else if (newTransform > maxTransform) {
          newTransform = maxTransform;
        }

        sliderInnerContainer.style.transform = `translateX(${newTransform}px)`;
        if (newTransform === minTransform || newTransform === maxTransform) {
          sliderActive = false;
          container.style.overflowX = "scroll";
          container.scrollLeft += e.deltaY;
        }
      } else {
        container.scrollLeft += e.deltaY;
      }
    }
  }

  const getCurrentTransformX = (element) => {
    const style = window.getComputedStyle(element);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
  };

  container.addEventListener("wheel", handleScroll);
}
