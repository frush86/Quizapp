const bodyElement = document.querySelector('[data-js="body"]');

const darkmodebutton = document.querySelector('[data-js="dark-mode-button"]');
const darkmodetoggle = document.querySelector('[data-js="dark-mode-toggle"]');

darkmodebutton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

darkmodetoggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
