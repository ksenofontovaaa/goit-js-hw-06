const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = document.querySelector('#ingredients')
const newList= ingredients.map(element=>{
 const newItem = document.createElement('li');
  newItem.textContent = element;
  newItem.classList.add('item');
  return newItem;
});

listOfIngredients.append(...newList);
