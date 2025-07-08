let grivna = Number(localStorage.getItem('grivna'));
let time = Number(localStorage.getItem('time'));
let timenow = new Date();
let div = document.getElementById('grivna');

if (!localStorage.getItem('time')) {
    grivna = 100;
    time = timenow.getTime();
} else {
    if (timenow.getTime() - time > 10 * 1000) {
        grivna += 10;
        time = timenow.getTime();
    }
}

localStorage.setItem('grivna', grivna);
localStorage.setItem('time', time);

div.innerText = `${grivna}грн`;