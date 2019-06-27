const radioBtnEightTen = document.querySelector('#checkEightTenth'),
    radioBtnOne = document.querySelector('#checkOne'),
    radioBtnOneSecond = document.querySelector('#checkOneSecond'),
    checkedRadio = document.querySelectorAll('.base'),
    smenaBtn = document.querySelector('#smena'),

    basePrice1 = document.querySelector('#basePrice1'),
    basePrice2 = document.querySelector('#basePrice2'),
    basePrice3 = document.querySelector('#basePrice3'),
    basePrice4 = document.querySelector('#basePrice4'),

    numberImBP = document.querySelector('#numberImBP'),
    numberImP = document.querySelector('#numberImP'),
    B2B = document.querySelector('#B2B'),
    orders = document.querySelector('#orders'),
    numberBtn = document.querySelectorAll('.number'),

    oklad = document.querySelector('#oklad'),
    premiya = document.querySelector('#premiya'),

    inputResult = document.querySelector('#result'),
    calcZP = document.querySelector('#calc'),
    inputPriceDay = document.querySelector('#priceDay'),
    inputAllDay = document.querySelector('#allDay'),
    inputCurrentDay = document.querySelector('#currentDay');

formStart = document.querySelector('#layerStart');
startButton = document.querySelector('#buttonStart');
dataNameInput = document.querySelector('#data-name-input'),
    dataNumberInput = document.querySelector('#data-number-input');



let arrOne = [70, 90, 47, 47];

startButton.addEventListener('click', function() {
    let personName = document.querySelector('#namePerson'),
        personNumber = document.querySelector('#numberPerson');
    if (dataNameInput.value && dataNumberInput.value) {
        personName.innerHTML += dataNameInput.value;
        personNumber.innerHTML += dataNumberInput.value;
        formStart.style.display = 'none';
        layerBase.style.display = 'block';

    } else {
        alert('Заполните все обязательные поля!');
        return;
    }

});

function changeRadioBtn() {
    if (radioBtnEightTen.checked == true) {
        checkedRadio.forEach(function(elem, i) {
            let value = elem.value;
            value = 0.8 * arrOne[i];
            elem.value = value;
        });

    } else if (radioBtnOne.checked == true) {
        checkedRadio.forEach(function(elem, i) {
            elem.value = arrOne[i];
        });
    } else {
        checkedRadio.forEach(function(elem, i) {
            let value = elem.value;
            value = 1.2 * arrOne[i];
            elem.value = value;
        });
    }
}

calcZP.addEventListener('click', getFinishZp);

function getFinishZp() {
    changeRadioBtn();
    if (isNaN(getFullSum() - getTax())) {
        inputResult.value = 'Введите доставки!';
    } else {
        inputResult.value = getFullSum() - getTax();
        getFullPercents();
        getAllZp();
    }
}

function getTax() {
    return Math.floor(getFullSum() * 0.13);
}

function getFullSum() {
    return parseInt(getPrice(oklad)) + parseInt(getPrice(premiya)) + getSum() + getPriceRentCar();

}


function getSum() {
    let res = getPrice(basePrice1, numberImBP) + getPrice(basePrice2, numberImP) + getPrice(basePrice3, B2B) + getPrice(basePrice4, orders);
    return res;
}

function getPrice(num1, num2) {
    if (num2) {
        return parseInt(num1.value) * parseInt(num2.value);
    } else {
        return parseInt(num1.value);
    }
}

(function getOklad() {
    inputCurrentDay.addEventListener('blur', function() {
        if (inputAllDay.value == inputCurrentDay.value) {
            oklad.value = 12334;
            premiya.value = Math.floor(oklad.value / 2);
            getOkladOneDay();

        } else {
            getOkladOneDay();
            oklad.value = getOkladOneDay() * inputCurrentDay.value;
            premiya.value = Math.floor(oklad.value / 2);
        }
        getPriceRentCar();
    });

}());

function getOkladOneDay() {
    return inputPriceDay.value = Math.floor(12334 / inputAllDay.value);
}

function getPriceRentCar() {
    inputRentCar = document.querySelector('#rentCar');

    return inputRentCar.value = parseInt(Math.floor(910 * inputCurrentDay.value));
}

function getFullPercents() {
    thirteenPercents.value = getTax();
}

function getAllZp() {
    allZp = document.querySelector('#allZp');
    allZp.value = getFullSum();
}