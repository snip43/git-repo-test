import React from 'react';
import { Link } from 'react-router-dom';

const CardPage = () => {
	return (
	<Link to='/card'>
		<div className='container w-50 text-danger'>Это Card Page Страница</div>
	</Link>)
}

export default CardPage;