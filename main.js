// Menu animation button

let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  this.classList.toggle("active");

  let menuList = document.querySelector(".menu-list");
  let displayState = menuList.style.display;

  if (displayState === "none" || displayState === "") {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }

  if (menuList.classList.contains("show")) {
    menuList.classList.remove("show");
    menuList.classList.add("hide");
  } else {
    menuList.classList.remove("hide");
    menuList.classList.add("show");
  }
});

// Accordion

const accordions = document.querySelectorAll(".accordion");

const openAccordion = (accordion) => {
  const content = accordion.querySelector(".accordion__content");
  accordion.classList.add("accordion__active");
  content.style.maxHeight = content.scrollHeight + "px"; // the content.scrollHeight + "px" basically computates a value and returns an integer number, and adds a "px" at the end, since maxHeight requires a value in px.
};

const closeAccordion = (accordion) => {
  const content = accordion.querySelector(".accordion__content");
  accordion.classList.remove("accordion__active");
  content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
  const intro = accordion.querySelector(".accordion__intro");
  const content = accordion.querySelector(".accordion__content");

  intro.onclick = () => {
    if (content.style.maxHeight) {
      closeAccordion(accordion);
    } else {
      accordions.forEach((accordion) => closeAccordion(accordion)); // Closes all currently opened accordions and opens only 1 at a time
      openAccordion(accordion);
    }
  };
});
