const form = document.querySelector('[data-js="form"]');
const cardContainer = document.querySelector('[data-js="cardContainer"]');

//SHOW HIDE ANSWER CARD
const showanswer = document.querySelector('[data-js="showanswer"]');
const answer = document.querySelector('[data-js="answer"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // GET ALL DATA
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  // CREATE CARD
  cardContainer.innerHTML = `
<!--QUESTION BOX-->
      <section class="qcard">
        <!--FLAG BOOKMARKS toogle in JS-->
        <button class="bookmark" data-js="bookmark" aria-label="white flag">
          🏳️
        </button>
        <h2 class="question">${data.yourQuestion}</h2>
        <!--BUTTON SHOWANSWER-->
        <button class="showanswer" data-js="showanswer">Show answer</button>
        <!--ANSWER show and hide in JS-->
        <article class="answer" data-js="answer">${data.yourAnswer}</article>
        <!-- TAGS-->
        <ul class="categories">
          <li class="tag">${data.yourTag}</li>
          <li class="tag">#second tag</li>
          <li class="tag">#third tag</li>
        </ul>
      </section>
      <!--/QUESTION BOX-->
`;

  form.reset();
});

// SHOW HIDE ANSWER

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

/* IT WORKLS BUT OLD
  const newCard = document.createElement("section");
  newCard.classList.add("newCard");

  const question = document.createElement("h2");
  question.textContent = `Question: ${data.yourQuestion}`;

  const answer = document.createElement("article");
  answer.textContent = `Answer: ${data.yourAnswer}`;

  const tag = document.createElement("div");
  tag.textContent = `Tags: ${data.yourTag}`;

  // APPEND
  newCard.append(question);
  newCard.append(answer);
  newCard.append(tag);

  cardContainer.append(newCard);

  
  */

/*
  const formElements = event.target.elements;
  console.log(formElements.yourQuestion);
  console.log(formElements.yourQuestion.value);
  */
