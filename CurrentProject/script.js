let gamer = 'X';

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
            td.classList.add('cell');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
    clickTable();
}

function clickTable() {
    let table = document.querySelector('table'),
        cells = table.querySelectorAll('.cell');

    cells.forEach(function(elem) {
        elem.addEventListener('click', function use() {
            elem.innerHTML = gamer;
            this.removeEventListener('click', use);
            let winner = getWinner(cells);
            if (winner !== false) {
                alert('СТОП ИГРА! Выйграл: ' + gamer);
                elem.removeEventListener('click', use);
            }
            gamer = getNextGamer(gamer);
        });
    });

    // table.addEventListener('click', function use(event) {
    //     let target = event.target;

    //     if (target.tagName == 'TD') {
    //         target.innerHTML = gamer;
    //         target.removeEventListener('click', use);
    // 				getWinner(cells);

    //         if (getWinner(cells) != false) {
    //             alert('СТОП ИГРА! Выйграл: ' + gamer);
    //             this.removeEventListener('click', use);
    //         }
    //         gamer = getNextGamer(gamer);
    //     }
    // });
}

function getNextGamer() {
    if (gamer == 'X') {
        return '0';
    } else {
        return 'X';
    }
}

function getWinner(cells) {
    let winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],
    ];


    for (let i = 0; i < winCombinations.length; i++) {
        let comb = winCombinations[i];

        if (cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
            cells[comb[0]].innerHTML == cells[comb[2]].innerHTML &&
            cells[comb[0]].innerHTML != '') {
            return cells[comb[0].innerHTML];
        }
    }
    return false;
}

function stopGame(param, func) {
    param.forEach(function(elem) {
        elem.removeEventListener('click', func);
    })

}

createTable(3, 3);