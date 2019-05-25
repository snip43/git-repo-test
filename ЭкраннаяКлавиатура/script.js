const classButton = document.querySelectorAll('.button'),
    button = document.querySelectorAll('button'),
    textPlace = document.querySelector('textarea'),
    buttonClear = document.querySelector('#clearButton'),
    buttonSpace = document.querySelector('.spaceButton'),
    buttonBackspace = document.querySelector('#backspace'),
    buttonTab = document.querySelector('#tab');

classButton.forEach(function(elem) {
    elem.addEventListener('click', function() {
        textPlace.innerHTML += this.innerHTML;
    });
});

button.forEach(function(elem) {
    elem.addEventListener('mousemove', function() {
        elem.style.background = '#ff8080';
    });
    elem.addEventListener('mouseout', function() {
        elem.style.background = '';
    });
});

buttonBackspace.addEventListener('click', function() {
    let text = textPlace.innerHTML.slice(0, -1);
    textPlace.innerHTML = text;
});

buttonTab.addEventListener('click', function() {
    textPlace.innerHTML += '  ';
});

buttonClear.addEventListener('click', function() {
    textPlace.innerHTML = '';
});

buttonSpace.addEventListener('click', function() {
    textPlace.innerHTML += ' ';
});