function createTable(x, y) {
    let table = document.createElement('table');
    for (let i = 1; i <= x; i++) {
        let tr = document.createElement('tr');
        for (let j = 1; j <= y; j++) {
            let td = document.createElement('td');
            td.style.border = '1px solid black';
            td.style.width = '50px';
            td.style.height = '50px';
            td.style.textAlign = 'center';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
    clickTable();
}

function clickTable() {
    let table = document.querySelector('table');
    table.addEventListener('click', function() {
        let target = event.target;
        if (target.tagName == 'TD') {
            let text = setNumber(1);
            target.innerHTML = text;
            text = setNumber(2);
            if (text == 2) {
                target.innerHTML = text;
                text = setNumber(1);
                console.log('text2:' + text);
            } else if (target.tagName == 'TD' && text == 1) {
                target.innerHTML = text;
                text = setNumber(2);
                console.log('text3:' + text);
            }
        }
    });
}

function changeNumber() {

}

function setNumber(x) {
    return x;
}






createTable(3, 3);