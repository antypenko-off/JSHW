/*
#bq1zkx7WP

створити сторінку з довільним блоком, в середині якого є значення “100грн”

при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження,
які відбулись пізніше ніж 10 секунд після попереднього.

 При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається
 */

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