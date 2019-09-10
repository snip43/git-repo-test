import React from 'react';
import './book-list-item.css'

const BookListItem = ({ book }) => {
	const { title, author,price,coverImage} = book;

	return (

		<div className='d-flex'>
			<div className='col'>
				<img src={ coverImage } alt="cover" className='w-100' /> 
			</div>
			<div className='d-flex flex-column justify-content-around col'>
						<span> <strong>{title}</strong></span>
						<p className=' mb-3'>Автор: {author}</p>
						<p className=' mb-3 '><strong>Цена: ${price}</strong></p>
				<button className='btn btn-info'>Добавить в корзину</button>
			</div>
		

			</div>	
	)
};

export default BookListItem;