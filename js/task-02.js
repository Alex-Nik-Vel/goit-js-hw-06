// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUl = document.querySelector("#ingredients");

const makeIngredientsUl = ingredients => {
    return ingredients.map( ingredientsLi => {
const liElem = document.createElement('li');
liElem.classList.add("item");
liElem.textContent = ingredientsLi;
console.log(liElem);

   return liElem;
})
}
const elements = makeIngredientsUl(ingredients);
console.log(elements);
ingredientsUl.append(...elements);

