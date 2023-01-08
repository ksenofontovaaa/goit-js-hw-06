
const counterValue = document.querySelector('#value');
const button = document.querySelectorAll('button[data-action]');
const decrementBtn = button[0];
const incrementBtn = button[1];


let newValue = 0;
decrementBtn.addEventListener('click', onDecrementBtn);
function onDecrementBtn(){
    newValue -= 1;
    counterValue.textContent = newValue;
}
incrementBtn.addEventListener('click', onIncrementBtn);
function onIncrementBtn(){
    newValue += 1;
    counterValue.textContent = newValue;
}

