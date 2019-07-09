class PersonName {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
    getName() {
        document.querySelector('#namePerson').innerHTML += this.name;
        document.querySelector('#numberPerson').innerHTML += this.number;
    }
    setName(name) {
        return this.name = name;
    }
    setNumber(number) {
        return this.number = number;
    }

}
let namePostMan = prompt('Введите имя: '),
    numberPoestMan = prompt('Введите табельный номер: ');

let user = new PersonName(namePostMan, numberPoestMan);
if (namePostMan == null || numberPoestMan == null) {
    user.setName('Имя не введено,печаль :(');
    user.setNumber(' не введен,печаль :(');
    user.getName();
} else {
    user.getName();
}