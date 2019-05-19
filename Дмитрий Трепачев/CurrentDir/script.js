/* 
Лекция №5 по JavaScript. Классная работа.Работа с функциями.
--------------------------------------— 
2. Дана таблица. В ней мы будем отображать купленные продукты. Каждый ряд таблицы - это один продукт, а именно: название продукта, его цена, количество и уплаченная сумма, которая равна цене умноженной на количество. Пусть продукты хранятся в виде объекта вида:
Итак, выведите эти продукты в виде таблицы, в отдельной колонке рассчитав сумму. Под таблицей выведите полную стоимость всех продуктов.
--------------------------------------— 
*/

const table = document.querySelector('#table'),
    name = document.querySelector('#name'),
    price = document.querySelector('#price'),
    quantity = document.querySelector('#quantity'),
    button = document.querySelector('#button');

start(table, totalP, name, price, quantity, button);

const table2 = document.querySelector('#table2'),
    name2 = document.querySelector('#name2'),
    price2 = document.querySelector('#price2'),
    quantity2 = document.querySelector('#quantity2'),
    button2 = document.querySelector('#button2');

start(table2, totalP2, name2, price2, quantity2, button2);

function start(tableField, output, nameField, priceField, quantityField, buttonField) {
    buttonField.addEventListener('click', function() {
        const tr = document.createElement('tr');

        createTd(nameField.value, tr);
        createTd(priceField.value, tr);
        createTd(quantityField.value, tr);
        createTd(quantityField.value * priceField.value, tr, 'cost');

        tableField.appendChild(tr);
        getSum(tableField, output);
    });
}

function createTd(text, parent, className) {
    const td = document.createElement('td');
    td.innerHTML = text;

    if (className != undefined) {
        td.classList.add(className);
        parent.appendChild(td);
    }
    parent.appendChild(td);
}

function getSum(tableField, output) {
    const costs = tableField.querySelectorAll('.cost');
    let total = 0;

    costs.forEach(function(item) {
        total += Number(item.innerHTML);
        output.innerHTML = 'Итого куплено товаров на сумму:' + total;
    });
    return total;
}