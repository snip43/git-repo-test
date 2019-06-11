setInterval -  window.timerId = window.setInterval(timer, 1000); - запуск таймера;
clearInterval - window.clearInterval(window.timerId); - остановка таймера;
setTimeout - window.setTimeout(func, 3000) - задержка перед запуском кода;

----------------------------------------------
Простой таймер с картинками: 
function timer() {
    var images = ['1.png', '2.png', '3.png', 'qwe.png'];
    var text = document.getElementById('text');
    var img = text.querySelector('img');

    var i = 0;
    window.timerId = window.setInterval(function() {
        img.src = 'img/' + images[i];
        i++;
        if (i == images.length) {
            i = 0;
        }
    }, 1000);

}

---------------------------------------------