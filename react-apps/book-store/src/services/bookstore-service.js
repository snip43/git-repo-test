
export default class BookstoreService {
	
	getBooks(){
		return [
			{
				id:1,
				title: 'JS',
				author: 'Пушкин А.С.'
			},
			{
				id:2,
				title: 'React',
				author: 'Шекспир У.'
			}
		];
	}
}