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