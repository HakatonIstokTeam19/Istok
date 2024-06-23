function clickFilter() {
  const filterText = document.querySelector(".main__filter-heading");
  const filterArrow = document.querySelector(".main__filter-arrow");
  const filterAside = document.querySelector(".main__filter-bar");
  const filter = document.querySelector(".main__filter");
  const filterOptions = document.querySelector(".main__filter-options");
  filterText.addEventListener("click", () => {
    const isVisible = filterOptions.style.display == "flex";
    if (isVisible) {
      filterOptions.style.display = "none";
      filter.style.display = "flex";
      filterArrow.classList.add("clicked");
      filterAside.classList.add("filtered");
    } else {
      filterOptions.style.display = "flex";
      filter.style.display = "none";
      filterArrow.classList.remove("clicked");
      filterAside.classList.remove("filtered");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".main__cards-section");

  function handleScroll(e) {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
  }

  scrollContainer.addEventListener("wheel", handleScroll);
  clickFilter();
});
