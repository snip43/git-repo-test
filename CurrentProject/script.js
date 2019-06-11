// Урок 66.Применение ООП при работе в DOM
// --------------------------------------------------------
// Реализуйте класс Rectangle, о котором я рассказываю в видео в теоретической части урока. У него должны быть следующие свойства: ширина width, высота height. Также у него должны быть следующие методы: получить ширину getWidth, установить ширину setWidth, получить высоту getHeight, установить высоту setHeight.

class Rectangle {
    constructor(name, width, height) {

        this.elem = document.createElement(name);

        this.setWidth(width);
        this.setHeight(height);
        this.elem.style.border = '1px solid red';

        document.body.appendChild(this.elem);

    }
    getWidth() {
        return parseInt(this.elem.style.width);
    }
    getHeight() {
        return parseInt(this.elem.style.width);
    }
    setWidth(width) {
        this.elem.style.width = width + 'px';
    }
    setHeight(height) {
        this.elem.style.height = height + 'px';
    }
}

let rec1 = new Rectangle('div', '100', '200');
// rec1.setWidth(300);
console.log(rec1.getWidth());
let rec2 = new Rectangle('p', '200', '100');