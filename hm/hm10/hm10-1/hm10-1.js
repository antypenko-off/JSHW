let buttons = document.getElementsByTagName('button');
buttons[0].onclick = function () {
    if (document.getElementsByTagName('input')[0].value >= 18) {
        alert("Enter accepted");
    } else {
        alert('Enter denied');
    }
}