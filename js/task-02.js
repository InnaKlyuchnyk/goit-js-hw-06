const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");

const createElement = (ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;

  return liEl;
};

const markUp = ingredients.map(createElement);

listOfIngredients.append(...markUp);
