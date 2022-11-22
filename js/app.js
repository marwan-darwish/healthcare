const menuBtn = document.querySelector(".navbar__menu");
const menuLinks = document.querySelector(".link_item");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuLinks.classList.toggle("show");
});
