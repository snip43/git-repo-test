
const _apiBase = 'https://api-maps.yandex.ru/2.1/?apikey=<8f42e052-d447-4449-976a-1f7e03ad7c41>&lang=ru_RU';

const _yandex = 'https://yandex.ru/'

fetch(_yandex)
	.then((res) => {
		console.log('Get response', res.status);
	});