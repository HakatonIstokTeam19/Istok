function clickFilter() {
  const filterText1 = document.querySelector(".main__filter-heading1");
  const filterText2 = document.querySelector(".main__filter-heading2");
  const filterAside = document.querySelector(".main__filter-bar");
  const filter = document.querySelector(".main__filter");
  const filterOptions = document.querySelector(".main__filter-options");

  filterText1.addEventListener("click", () => {
    filterOptions.style.display = "none";
    filter.style.display = "flex";
    filterAside.classList.add("filtered");
  });
  filterText2.addEventListener("click", () => {
    filterOptions.style.display = "flex";
    filter.style.display = "none";
    filterAside.classList.remove("filtered");
  });
}

const scrollContainer = document.querySelector(".main__cards-section");

function handleScroll(e) {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
}

function sliderImage() {
  const cards = document.querySelectorAll(".main__card");

  cards.forEach((card) => {
    let activeSlide = 0;
    const sliderArrows = card.querySelectorAll(".main__card-image-line");
    const slides = card.querySelectorAll(".main__image");
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
  });
}

function filter() {
  const divCont = document.querySelector(".main__form-option");
  divCont.addEventListener("click", (e) => {
    const div = e.target;
    let innerDiv = `
       <div class="main__form-option">
            <h3 class="font-body-2">По форме</h3>
            <label class="font-body-light-2"
              ><input
                class="main__form-checkbox"
                type="checkbox"
                name="Прямая"
                value="Прямая"
              />Прямая</label
            ><label class="font-body-light-2"
              ><input
                type="checkbox"
                name="Угловая"
                value="Угловая"
              />Угловая</label
            ><label class="font-body-light-2"
              ><input
                type="checkbox"
                name="П-образная"
                value="П-образная"
              />П-образная</label
            ><label class="font-body-light-2"
              ><input type="checkbox" name="Комод" value="Комод" />Комод</label
            ><label class="font-body-light-2"
              ><input
                type="checkbox"
                name="Г-образная"
                value="Г-образная"
              />Г-образная</label
            >
          </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  scrollContainer.addEventListener("wheel", handleScroll);
  clickFilter();

  sliderImage();
});
