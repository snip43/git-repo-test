const wrapperPlace = document.querySelector('#wrapper'),
    arrColors = ['green', 'red'],
    arrGamers = ['gamer1', 'gamer2'];

class Gamer {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

}
let Roman = new Gamer('Roman', 'green');

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
    const tableGett = wrapperPlace.querySelector('table'),
        tdGett = wrapperPlace.querySelectorAll('td');

    tableGett.addEventListener('click', function(event) {

        if (event.target.tagName == 'TD') {
            event.target.style.backgroundColor = 'green';
        }
    });
}

function changeColors() {

}