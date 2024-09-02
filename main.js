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
