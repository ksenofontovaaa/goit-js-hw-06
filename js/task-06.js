// підключити значеня інпута
// ввести умову з кількістю if = > .{data-length}.value
// правильна кількість зелений ВАЛІД , неправильна червоний Інвалід
const input = document.querySelector("#validation-input");

input.addEventListener("blur", function() {
    if (Number(input.dataset.length) === input.value.length){
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
});