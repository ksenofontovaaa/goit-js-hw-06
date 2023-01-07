const array = document.querySelector('#name-input');
const message = document.querySelector('#name-output');

array.addEventListener("input", (event) => {
    return event.currentTarget.value ?
    (message.textContent = event.currentTarget.value) :
    (message.textContent = "Anonymous");
})
