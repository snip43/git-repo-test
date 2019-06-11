var stopButton = document.querySelector('#stopBut');
var startButton = document.querySelector('#startBut');
stopButton.disabled = true;
//запускается при нажатии на кнопку "Запустить карусель"
function start() {
    window.timerId = window.setInterval(changeImg, 1000);

    startButton.disabled = true;
    stopButton.disabled = false;
}
// запускается при нажатии на кнопку "Остановить карусель"
function stop() {
    window.clearInterval(timerId);

    startButton.disabled = false;
    stopButton.disabled = true;
}

//запуск таймера
function changeImg() {
    var img1 = document.querySelector('#imgInText1');
    var img2 = document.querySelector('#imgInText2');
    var img3 = document.querySelector('#imgInText3');
    var img4 = document.querySelector('#imgInText4');

    var tmp = img1.src;
    img1.src = img2.src;
    img2.src = img3.src;
    img3.src = img4.src;
    img4.src = tmp;
}