//------------------CONST-------------------------------
const classButtons = document.querySelectorAll('.button'),
    button = document.querySelectorAll('button'),
    textPlace = document.querySelector('textarea'),
    buttonClear = document.querySelector('#clearButton'),
    buttonSpace = document.querySelector('.spaceButton'),
    buttonBackspace = document.querySelector('#backspace'),
    buttonTab = document.querySelector('#tab'),
    capsButton = document.querySelector('#capsLock'),
    shiftButtons = document.querySelectorAll('.shift'),
    enterButton = document.querySelector('#enter');
//-------------------------------------------------
//----------------BUTTONS WITH CLASS BUTTON------------		
classButtons.forEach(function(elem) {
    elem.addEventListener('click', function() {
        textPlace.innerHTML += this.innerHTML;
    });
});
//----------------------------
//----------------------------ALL BUTTONS--------------
button.forEach(function(elem) {
    elem.addEventListener('mousemove', function() {
        elem.style.background = '#ff8080';
        elem.style.cursor = 'pointer';
    });
    elem.addEventListener('mouseout', function() {
        elem.style.background = '';
    });
});
//------------------------------------------
// -------------------BACKSPACE------------------------
buttonBackspace.addEventListener('click', function() {
    let text = textPlace.innerHTML.slice(0, -1);
    textPlace.innerHTML = text;
});
// -------------------------------------------
// ----------------------TAB---------------------------
buttonTab.addEventListener('click', function() {
    textPlace.innerHTML += '  ';
});
// -------------------------------------------------
// --------------------CLEAR--------------------------
buttonClear.addEventListener('click', function() {
    textPlace.innerHTML = '';
});
// ----------------------------------------------
// ----------------------SPACE------------------------
buttonSpace.addEventListener('click', function() {
    textPlace.innerHTML += ' ';
});
// ----------------------------------------------

// ----------------- SHIFT ------------------------

shiftButtons.forEach(function(elem) {
    elem.addEventListener('click', getShiftUp);
});


function getShiftUp() {
    shiftButtons.forEach(function(item) {
        item.style.color = 'green';
    });
    classButtons.forEach(function(elem) {
        let text = elem.innerHTML.toUpperCase();
        elem.innerHTML = text;
        elem.addEventListener('click', function() {
            getShiftLow();
        });
    });
}

function getShiftLow() {
    shiftButtons.forEach(function(item) {
        item.style.color = '';
        item.removeEventListener('click', getShiftUp);
    });
    classButtons.forEach(function(elem) {
        let text = elem.innerHTML.toLowerCase();
        elem.innerHTML = text;
    });
}
// -------------------------------------------------------------------------------


// --------------------- ENTER-------------------------------------

enterButton.addEventListener('click', function() {
    textPlace.innerHTML += '\n';
});

// ----------------------------------------------------------------------

// ---------------------CAPS LOCK----------------------------------------

capsButton.addEventListener('click', upperCase);

function upperCase() {
    capsButton.style.color = 'green';
    classButtons.forEach(function(item) {
        let text = item.innerHTML.toUpperCase();
        item.innerHTML = text;
    });
    capsButton.removeEventListener('click', upperCase);
    capsButton.addEventListener('click', lowerCase);
}

function lowerCase() {
    capsButton.style.color = '';
    classButtons.forEach(function(item) {
        let text = item.innerHTML.toLowerCase();
        item.innerHTML = text;
    });
    capsButton.removeEventListener('click', lowerCase);
    capsButton.addEventListener('click', upperCase);
}

// --------------------------------------------------------------------------