const typeOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', typeOfCategories.length);

const items = [...typeOfCategories];

 items.forEach(element=> {
    console.log('Category:', element.firstElementChild.textContent)
    console.log('Elements:', element.lastElementChild.childElementCount)
})

