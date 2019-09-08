import React from 'react';
import BookList from '../book-list/';

const HomePage = () => {
	const books = [
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
	]
	return (

		<BookList books={ books } />
	)
}

export default HomePage;