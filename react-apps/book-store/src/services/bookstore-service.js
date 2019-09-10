
export default class BookstoreService {
	data = [
		{
			id:1,
			title: 'JS',
			author: 'Пушкин А.С.',
			price: 25,
			coverImage: 'https://avatanplus.com/files/resources/original/57e8ea971431f15765d45e2b.png'
		},
		{
			id:2,
			title: 'React',
			author: 'Шекспир У.',
			price: 35,
			coverImage: 'https://avatanplus.com/files/resources/original/57e8ea971431f15765d45e2b.png'
		}
	];
	
	getBooks(){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(this.data)
			//	reject(new Error('Something bad error'))
			},1000)
		});
	}
}