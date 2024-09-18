/*
const bodyElement = document.querySelector('[data-js="body"]');

const darkmodebutton = document.querySelector('[data-js="dark-mode-button"]');
const darkmodetoggle = document.querySelector('[data-js="dark-mode-toggle"]');

darkmodebutton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

darkmodetoggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
*/

// CHANGE BOOKMARK

const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  if (bookmark.innerHTML === "🏳️") {
    bookmark.innerHTML = "🚩";
  } else {
    bookmark.innerHTML = "🏳️";
  }
});

// SHOW HIDE ANSWER

const showanswer = document.querySelector('[data-js="showanswer"]');
const answer = document.querySelector('[data-js="answer"]');

showanswer.addEventListener("click", () => {
  console.log("show pls");
  if (answer.style.visibility === "hidden") {
    answer.style.visibility = "visible";
    showanswer.textContent = "Hide Answer";
  } else {
    answer.style.visibility = "hidden";
    showanswer.textContent = "Show Answer";
  }
});
