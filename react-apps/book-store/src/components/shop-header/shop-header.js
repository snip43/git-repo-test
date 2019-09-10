import  React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom'

const ShopHeader = ({ numItems,total }) => {
	return (
	<header className='shop-header d-flex justify-content-between border-bottom mb-5 align-items-center'>
	<Link to='/home'>	
		<div className='logo text-dark'>BookStore</div>
	</Link>	
	<Link to='/cart'>
		<div className='shopping-cart card-link'>
			<i className='cart-icon fa fa-shopping-cart'></i>
			{numItems} items (${total})
		</div>
	</Link>
	</header>
	)
}

export default ShopHeader;

