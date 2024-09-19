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
  if (answer.style.display === "none") {
    // Show
    answer.style.display = "block";
    showanswer.innerText = "Hide answer"; // button
  } else {
    // Hide
    answer.style.display = "none";
    showanswer.innerText = "Show answer"; // button
  }
});
