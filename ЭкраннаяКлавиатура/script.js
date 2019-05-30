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
    enterButton = document.querySelector('#enter'),
    selectButton = document.querySelector('#allSelectButton'),
    changeButton = document.querySelector('#buttonChange');

const enSign = ["\`", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "_", "+", "q", " w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
    ruSign = ["ё", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."];


//-------------------------------------------------
//-----------------------BUTTON CHANGE--------------------------
changeButton.addEventListener('click', changeEn);

function changeEn() {
    changeButton.style.color = 'green';
    classButtons.forEach(function(elem, i) {
        elem.innerHTML = enSign[i];
    });
    changeButton.removeEventListener('click', changeEn);
    changeButton.addEventListener('click', changeRu);
}

function changeRu() {
    changeButton.style.color = '';
    classButtons.forEach(function(elem, i) {
        elem.innerHTML = ruSign[i];
    });
    changeButton.removeEventListener('click', changeRu);
    changeButton.addEventListener('click', changeEn);
}
//--------------------------------------------------------------

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
    getSelection().removeAllRanges();
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
//--------------------------------ALL SELECTION------------------------------
selectButton.addEventListener('click', function() {
    let range = document.createRange();
    range.selectNode(textPlace);
    getSelection().addRange(range);
    textPlace.style.back = 'lightblue';
});
//--------------------------------------------------------------