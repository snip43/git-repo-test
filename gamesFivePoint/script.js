const wrapperPlace = document.querySelector('#wrapper');
let arrGamers = ['gamer1', 'gamer2'],
    name = 'greenColor';

createTableToWrapperPlace();

function createTableToWrapperPlace() {
    const table = document.createElement('table');

    for (let i = 1; i < 30; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 30; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            table.appendChild(tr);
        }
        wrapperPlace.appendChild(table);
    }
    clickTable();
}


function clickTable() {
    const tableGett = wrapperPlace.querySelector('table');
    tableGett.addEventListener('click', function clickTd(event) {
        if (event.target.tagName == 'TD') {
            setClass(name);
            changeClass();
            if (event.target.classList.contains('gamer')) {
                event.target.preventDefault();
            }
        }
    });
}

function setClass(name) {
    event.target.classList.add(name);
    event.target.classList.add('gamer');
}

function changeClass() {
    if (name == 'greenColor') {
        name = 'redColor';
    } else {
        name = 'greenColor';
    }
    return name;
}