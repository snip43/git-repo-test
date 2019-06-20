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

let arrOne = [70, 90, 47, 47];
// arrOklad = [12334, 6176],
// okladIM = 12334;



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
        getPriceAllDay();
        getPriceCurrentDay();
        inputResult.value = getFullSum() - getTax();

    }
}

function getTax() {
    return Math.floor((parseInt(getPrice(oklad)) + parseInt(getPrice(premiya)) + getSum()) / 100 * 13);
}

function getFullSum() {
    return parseInt(getPrice(oklad)) + parseInt(getPrice(premiya)) + getSum();
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

function getPriceAllDay() {

    if (inputAllDay.value.length !== 0 || inputAllDay.value !== 0) {
        oklad.value = okladIM;
        premiya.value = Math.round(okladIM / 2);

    } else {
        inputPriceDay.value = 'Введите кол-во дней ВСЕГО рабочих';
    }

}

function getPriceCurrentDay() {
    priceDay.value = Math.round(getPriceAllDay() / inputCurrentDay.value);
}