const menu = document.querySelector(".menu");
const menu__item = document.querySelectorAll(".menu__item");

const nav = document.querySelector(".nav");
const nav__items = document.querySelector(".nav__items");

let brand = document.querySelector(".brand");

menu.addEventListener("click", () => {
  menu__item.forEach((item, idx) => {
    if (idx === 0) {
      item.style.transform =
        item.style.transform === "rotate(1125deg) translate(-1px, 1rem)"
          ? null
          : "rotate(1125deg) translate(-1px, 1rem)";
      item.style.width = item.style.width === "28px" ? "14px" : "28px";
    }

    if (idx === 1) {
      item.style.display = item.style.display === "none" ? "block" : "none";
    }

    if (idx === 2) {
      item.style.transform =
        item.style.transform === "rotate(-1125deg) translate(-1px, -1rem)"
          ? null
          : "rotate(-1125deg) translate(-1px, -1rem)";
      item.style.width = item.style.width === "28px" ? "14px" : "28px";
    }
  });
});

menu__item.forEach((item, idx) => {
  item.addEventListener("click", () => {
    nav.classList.toggle(".res-nav");
    nav__items.classList.toggle("res-items");
    brand.style.position =
      brand.style.position === "fixed" ? "absolute" : "fixed";
    brand.style.zIndex = brand.style.zIndex === "100" ? "0" : "100";
  });
});
