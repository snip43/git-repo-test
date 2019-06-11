function start(elem) {
    window.timerId = window.setInterval(changeImg, 1000);
    elem.disabled = true;
}


function changeImg() {
    var img1 = document.querySelector('#imgInText1');
    var img2 = document.querySelector('#imgInText2');
    var img3 = document.querySelector('#imgInText3');
    var tmp = img1.src;
    img1.src = img2.src;
    img2.src = img3.src;
    img3.src = tmp;
}