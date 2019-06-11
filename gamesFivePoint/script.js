const wrapperPlace = document.querySelector('#wrapper');

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
}

createTableToWrapperPlace();