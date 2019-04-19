const area = document.querySelector('textarea'),
    button = document.querySelector('#button');

// button.addEventListener('click', function getServer() {
//     let json = JSON.stringify('area.innerHTML');
//     console.log(json);
// });
function start() {
    localStorage.getItem('areaText');
    let obj = JSON.parse(areaText);
    area.innerHTML = obj;
    console.log(obj);
};

button.addEventListener('click', function getServer() {
    let text = JSON.stringify(area.innerHTML);
    localStorage.setItem('areaText', text);
});