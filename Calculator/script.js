const inputText = document.querySelector('#allSection #text'),
    buttonSigns = document.querySelectorAll('#signs button'),
    // buttonNumbers = document.querySelector('#numbers'),
    buttonNumbersAll = document.querySelectorAll('button'),
    buttonClear = document.querySelector('#clearInput'),
    buttonEnter = document.querySelector('#enterButton'),
    areaMemory = document.querySelector('#memoryArea');


buttonSigns.forEach(function(elem) {
    elem.addEventListener('click', function() {
        areaMemory.innerHTML = inputText.value;
    });
});

buttonNumbersAll.forEach(function(elem) {
    elem.addEventListener('mousemove', function() {
        this.style.cursor = 'pointer';
    });
    elem.addEventListener('click', function() {
        inputText.value += elem.innerHTML;
        // areaMemory.innerHTML += elem.innerHTML;
    });
});

buttonClear.addEventListener('click', function(event) {
    event.preventDefault();
    inputText.value = '';
    areaMemory.innerHTML = '';
});

buttonEnter.addEventListener('click', function(event) {
    event.preventDefault();
    let code = 'inputText.value';
    inputText.value = eval(code);
});