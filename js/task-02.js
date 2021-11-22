const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredientsEl = document.querySelector("#ingredients");

ingredients.forEach(i => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.textContent = i;
  ingredientsItemEl.classList.add("item");
  listIngredientsEl.append(ingredientsItemEl);
});




