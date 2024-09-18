const form = document.querySelector('[data-js="form"]');
const cardContainer = document.querySelector('[data-js="cardContainer"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

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
});

/*
  const formElements = event.target.elements;
  console.log(formElements.yourQuestion);
  console.log(formElements.yourQuestion.value);
  */
