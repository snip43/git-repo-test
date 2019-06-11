function mints() {

    let inp = document.querySelector('#birthday'), // выбор элемента с id = birthday
        text = document.querySelector('#text'), // выбор элемента с id = text
        currentDate = new Date(), //текущая дата
        date = Date.parse(inp.value), // новый timestamp
        resultMs = Math.abs(date - currentDate), //
        resultDay = Math.floor(resultMs / (1000 * 60 * 60 * 24));


    text.innerHTML = `До дня рождения осталось ${resultDay} дней.`;
}