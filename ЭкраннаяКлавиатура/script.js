const button = document.querySelectorAll('.button'),
    textPlace = document.querySelector('textarea'),
    buttonClear = document.querySelector('#clearButton'),
    buttonSpace = document.querySelector('.spaceButton');

button.forEach(function(elem) {
    elem.addEventListener('click', function() {

        textPlace.innerHTML += this.innerHTML;
    });
});


buttonClear.addEventListener('click', function() {
    textPlace.innerHTML = '';
});

buttonSpace.addEventListener('click', function() {
    textPlace.innerHTML += ' ';
});