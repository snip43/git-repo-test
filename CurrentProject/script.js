// 8f42e052-d447-4449-976a-1f7e03ad7c41
const buttonGo = document.querySelector('#button');
buttonGo.addEventListener('keyDown', downKey );

const places = [];
const placemarks = [
	{
		latitude: 55.76,
		longitude:37.64
	}
];

ymaps.ready(init);

function init(){ 
	
	// Создание карты.    
	myMap = new ymaps.Map("map", {
		center: [55.76, 37.64],
		zoom: 11,
		controls: ['zoomControl']
	});

	ymaps.route([
    'Кронштадт, Якорная площадь',
    {
        type: 'viaPoint',
        point: [{
					
				}]// или 'Аничков мост'
    },
    'Санкт-Петербург, Финляндский вокзал'// или [59.956084, 30.356849]
]).then(
    function (route) {
        myMap.geoObjects.add(route);
    },
    function (error) {
        alert("Возникла ошибка: " + error.message);
    }
);
}


function downKey(event){
	// res.geoObjects.get(0).geometry.getCoordinates()
	if(event.keyCode===13){
		let target = event.target;
		value =	target.value;
		ymaps.geocode(value)
		.then((res)=> {
			placemarks.push(
				{
					latitude: res.geoObjects.get(0).geometry.getCoordinates()[0],
					longitude: res.geoObjects.get(0).geometry.getCoordinates()[1]
				}
			)		
		}
		)
		.then(()=> target.value ='');
		}
	}







