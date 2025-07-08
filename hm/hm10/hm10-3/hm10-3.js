/*
#NKB0tgWIK1G

***PAGINATION

зробити масив на 100 об’єктів та дві кнопки prev next

при завантаженні сторінки з’являються перші 10 об’єктів.

При натисканні next виводяться наступні 10 об’єктів

При натисканні prev виводяться попередні 10 об’єктів
 */


let divs = document.getElementsByTagName('div');
let counter = 0
let buttonNext = document.getElementById('next');
let buttonPrevious = document.getElementById('prev');
updateText();

function updateText() {
    console.log(counter);
    console.log(divs.length);
    for (let i = 0; i < divs.length; i++) {
        if (i >= counter && i < counter + 10) {
            divs[i].style.display = 'block';
        } else {
            divs[i].style.display = 'none';
        }
    }
}

buttonNext.addEventListener('click', () => {
    if (counter < 90) {
        counter += 10;
    }
    updateText();
});
buttonPrevious.addEventListener('click', () => {
    if (counter > 0) {
        counter -= 10;
    }
    updateText();
});