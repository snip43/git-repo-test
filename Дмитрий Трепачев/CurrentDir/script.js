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
    button = document.querySelector('#button'),
    p = document.querySelector('#totalP');
start(table, totalP, name, price, quantity, button);

const table2 = document.querySelector('#table2'),
    name2 = document.querySelector('#name2'),
    price2 = document.querySelector('#price2'),
    quantity2 = document.querySelector('#quantity2'),
    button2 = document.querySelector('#button2'),
    p2 = document.querySelector('#totalP2');
start(table2, totalP2, name2, price2, quantity2, button2);

function start(tableField, output, nameField, priceField, quantityField, buttonField) {
    buttonField.addEventListener('click', function() {
        const tr = document.createElement('tr');

        createTd(nameField.value, tr);
        createTd(priceField.value, tr);
        createTd(quantityField.value, tr);
        createTdd(quantityField.value * priceField.value, tr, 'cost');
        delProductForTable(tableField, tr);

        tableField.appendChild(tr);
        getSum(tableField, output);
        editTd(tableField, output, priceField, quantityField);
    });
}

function delProductForTable(table, tr) {
    const td = document.createElement('td');

    tr.appendChild(td);

    const del = document.createElement('a');
    del.href = '#';
    del.innerHTML = 'удалить';
    td.appendChild(del);

    del.addEventListener('click', function() {
        table.removeChild(tr);
        editTd();
    });

}

function createTd(text, parent) {
    const td = document.createElement('td');
    td.innerHTML = text;
    td.classList.add('tdd');
    parent.appendChild(td);
}

function createTdd(text, parent, className) {
    const td = document.createElement('td');
    td.innerHTML = text;
    td.classList.add(className);
    td.classList.remove('tdd');
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

function editTd(tableField, output, priceField, quantityField) {
    const tdd = tableField.querySelectorAll('.tdd');

    tdd.forEach(function(elem) {
        elem.addEventListener('click', function() {
            const newInp = document.createElement('input');
            newInp.classList.add('editInp');
            newInp.value = this.innerHTML;
            console.log(this.innerHTML);
            table.appendChild(newInp);

            let self = this;

            newInp.addEventListener('blur', function() {

                // createTdd(quantityField.value * priceField.value,tr, 'cost');

                const costs = tableField.querySelectorAll('.cost');
                let total = 0;

                self.innerHTML = newInp.value;
                newInp.style.display = 'none';

                costs.forEach(function(item) {
                    total += Number(item.innerHTML);
                    output.innerHTML = 'Итого куплено товаров на сумму:' + total;
                });
                console.log(total);
                return total;
            });
        });
    });

}