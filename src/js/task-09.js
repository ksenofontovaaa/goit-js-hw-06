
// задання значення кнопці
// прослуховувач подій і подія клік
// значення кольору виводиться в спан
// const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
// span.textContent = 'randomColor';
// колір випадковий вимальовує фон <body>
// body.style.backgroundColor = randomColor
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.body;

btn.addEventListener('click', newBackground);


function newBackground(){
  const randomColor = getRandomHexColor();
  span.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
