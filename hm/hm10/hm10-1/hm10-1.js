/*
#j693ca8

– створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.

При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
 */

let buttons = document.getElementsByTagName('button');
buttons[0].onclick = function () {
    if (document.getElementsByTagName('input')[0].value >= 18) {
        alert("Enter accepted");
    } else {
        alert('Enter denied');
    }
}