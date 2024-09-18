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

// Set initial state based on computed visibility
const answerComputedStyle = window.getComputedStyle(answer);

showanswer.addEventListener("click", () => {
  // Get the computed visibility to check the actual state
  if (
    answerComputedStyle.visibility === "hidden" ||
    answer.style.visibility === "hidden"
  ) {
    answer.style.visibility = "visible"; // Show the answer
    showanswer.textContent = "Hide Answer"; // Update button text
  } else {
    answer.style.visibility = "hidden"; // Hide the answer
    showanswer.textContent = "Show Answer"; // Update button text
  }
});
