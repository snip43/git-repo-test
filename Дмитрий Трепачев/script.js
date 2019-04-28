const cell = document.querySelectorAll('td'); //массив ячеек таблицы
let player = 1; //значение первого игрока.
// -------------------------------------------------------------------------------------------
// function start() {
//     cell.forEach(function(elem) {
//         if (player == 1) {
//             // console.log(player);
//             elem.style.cursor = 'pointer';
//             elem.addEventListener('click', function() {
//                 this.classList.add('crest');
//             });
//             return player = 2;
//         } else {
//             // console.log(player);
//             elem.style.cursor = 'not-allowed';
//             elem.addEventListener('click', function() {
//                 this.classList.add('zero');
//             });
//             return player = 1;
//         }
//     });
// }


// start();
// -----------------------------------------------------------------------------------------------

//функция для "крестиков"
function playerOne() {
    cell.forEach(function(elem) { // перебор массива с ячейками td
        elem.addEventListener('mouseover', function() { // навешиваем каждому элементу событие 
            elem.style.cursor = 'pointer'; // "при движении внутри elem изменять курсор"
        });
        elem.addEventListener('click', function() { //навешиваем каждому элементу событие "по клику"
            this.classList.add('crest'); //при клике на элемент td добавляется класс с картинкой "крестика"
            // 9 выйгрышных комбинаций. После клика смотрим все элементы,если есть какая-либо из 9 комбинаций ==> выводим сообщение о выйгрыше
            if (cell[0].classList.contains('crest') && cell[1].classList.contains('crest') && cell[2].classList.contains('crest') ||
                cell[0].classList.contains('crest') && cell[3].classList.contains('crest') && cell[6].classList.contains('crest') ||
                cell[0].classList.contains('crest') && cell[4].classList.contains('crest') && cell[8].classList.contains('crest') ||
                cell[2].classList.contains('crest') && cell[4].classList.contains('crest') && cell[6].classList.contains('crest') ||
                cell[0].classList.contains('crest') && cell[3].classList.contains('crest') && cell[6].classList.contains('crest') ||
                cell[1].classList.contains('crest') && cell[4].classList.contains('crest') && cell[7].classList.contains('crest') ||
                cell[2].classList.contains('crest') && cell[5].classList.contains('crest') && cell[8].classList.contains('crest') ||
                cell[3].classList.contains('crest') && cell[4].classList.contains('crest') && cell[5].classList.contains('crest') ||
                cell[6].classList.contains('crest') && cell[7].classList.contains('crest') && cell[8].classList.contains('crest')) {
                alert('Игра окончена,выйграли "крестики"'); //сообщение о выйгрыше
                return go(); //возврат в начало программы
            } else { //если выйгрыша нет - передаем ход игроку 2. Тут добавляются оба класса ,и crest и zero, поэтому 1 из них удаляем.
                this.classList.remove('zero'); //удаление класса второго игрока
                playerTwo(); //функция для второго игрока
            }
        });
    });
}

//функция для "ноликов"
function playerTwo() {
    cell.forEach(function(elem) {
        elem.addEventListener('mouseover', function() {
            elem.style.cursor = 'crosshair';
        });
        elem.addEventListener('click', function() {
            this.classList.add('zero');
            if (cell[0].classList.contains('zero') && cell[1].classList.contains('zero') && cell[2].classList.contains('zero') ||
                cell[0].classList.contains('zero') && cell[3].classList.contains('zero') && cell[6].classList.contains('zero') ||
                cell[0].classList.contains('zero') && cell[4].classList.contains('zero') && cell[8].classList.contains('zero') ||
                cell[2].classList.contains('zero') && cell[4].classList.contains('zero') && cell[6].classList.contains('zero') ||
                cell[0].classList.contains('zero') && cell[3].classList.contains('zero') && cell[6].classList.contains('zero') ||
                cell[1].classList.contains('zero') && cell[4].classList.contains('zero') && cell[7].classList.contains('zero') ||
                cell[2].classList.contains('zero') && cell[5].classList.contains('zero') && cell[8].classList.contains('zero') ||
                cell[3].classList.contains('zero') && cell[4].classList.contains('zero') && cell[5].classList.contains('zero') ||
                cell[6].classList.contains('zero') && cell[7].classList.contains('zero') && cell[8].classList.contains('zero')) {
                alert('Игра окончена,выйграли "нолики"');

            } else {
                this.classList.remove('crest');
                playerOne();
            }
        });

    });
}

// стартовая функция
function go() {
    if (confirm('Играем ?')) { //выводим сообщение о начале игры
        alert('Начинает 1 игрок с крестиков!'); // сообщение о том что начинает 1 игрок.
        playerOne();
        // if (player == 1) {
        //     playerOne();
        // } else {
        //     playerTwo();
        // }
    } else {
        alert('Приходите завтра!');
    }
}

go();