import React from 'react';
import './book-list-item.css'

const BookListItem = ({ book, onAddedToCart }) => {
	const { title, author,price,coverImage} = book;

	return (

	<div className='card'>
		<div className='card-img-top text-center my-2'>
			<img src={ coverImage } alt="cover" className='w-75' /> 
		</div>
		<div className='card-body'>
			<h4 className='card-title mb-0'><strong> {title}</strong></h4>
			<p className='card-text'>Автор: {author}</p>
			<p className=' mb-3 '> <strong> Цена: ${price} </strong> </p>
		</div>
		<div className='mx-auto mb-3'>
			<button 
			onClick = { onAddedToCart }
			className='btn btn-info  '>Добавить в корзину</button>
		</div>
	</div>	
	)
};

export default BookListItem;