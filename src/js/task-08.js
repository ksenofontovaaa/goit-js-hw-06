
// ////////////////////////////////////////////////////////////////////////
// задання значнь елементам >>>
// прослуховувач події з подією submit.>>>
// після нажимання на кнопку сторінка НЕ ПЕРЕЗАВАНТАЖУЄТЬСЯ >>>
// function onSubmit(evt){
//     evt.preventDefault();
// }
// якщо усі поля не заповнені то виводиться alert (це просто повідомлення чи нагадування з самої форми?)
// збір інформації в об'єкт>>>>
// цей обєкт вводиться в консоль, а на сторінці усе очищається методом reset.>>>
// /////////////////////////////////////////////////////////////////////////
const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt){
    evt.preventDefault();
    if (form[0].value || form[1].value === ''){
alert('Заповніть усі поля');
    }

    console.log('email:', form[0].value);
    console.log('password:', form[1].value);
    form.reset();
}