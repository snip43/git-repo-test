
const _apiBase = 'https://api-maps.yandex.ru/2.1/?apikey=<8f42e052-d447-4449-976a-1f7e03ad7c41>&lang=ru_RU';

fetch('https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A52a2095c54e94f257dcce7bb3c50ed5a89a1481715b1818e4fc33292808371c9&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true&amp;apikey=<8f42e052-d447-4449-976a-1f7e03ad7c41>&lang=ru_RU')
	.then((res) => {
		console.log('Get response', res.status);
	});