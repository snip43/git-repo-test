const radioBtnEightTen = document.querySelector('#checkEightTenth'),
    radioBtnOne = document.querySelector('#checkOne'),
    radioBtnOneSecond = document.querySelector('#checkOneSecond'),

    basePrice1 = document.querySelector('#basePrice1'),
    basePrice2 = document.querySelector('#basePrice2'),
    basePrice3 = document.querySelector('#basePrice3'),
    basePrice4 = document.querySelector('#basePrice4'),

    numberImBP = document.querySelector('#numberImBP'),
    numberImP = document.querySelector('#numberImP'),
    B2B = document.querySelector('#B2B'),
    orders = document.querySelector('#orders'),

    oklad = document.querySelector('#oklad'),
    premiya = document.querySelector('#premiya'),

    inputResult = document.querySelector('#result'),
    calcZP = document.querySelector('#calc');

calcZP.addEventListener('click', getFinishZp);

function getFinishZp() {
    inputResult.value = getFullSum() - getTax();
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