let email = document.querySelector('.subscription-email');
let message = document.querySelector('.subscription-message');
let form = document.querySelector('.subscription');
 console.log(message.textContent);
 message.textContent = 'Я новий текстовий вміст елемента!';
 message.textContent = 'Який' + '<strong>нетямущий</strong>' + 'браузер!';
 form.onsubmit = function(event) {
     event.preventDefault();
     message.textContent = 'Адреса ' + email.value + ' доданий до списку одержувачів розсилки';
     email.value = '';
 };