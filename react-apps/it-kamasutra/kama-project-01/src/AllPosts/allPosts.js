import React from 'react';

import Post from '../Post'

const AllPosts = () => {

	let postsData = [
		{id:1, value:'Первое',likeCount:20},
		{id:2, value:'Двадцать пятое', likeCount:1}
	];

	let newPost = postsData.map( p => (
		<Post 
			value={p.value} 
			likeCount ={p.likeCount} 
			id={p.id} />	
	));
	
	return (
	<div className='posts_old d-flex flex-column my-3 align-items-start w-75'>
		<h5>Недавние сообщения:</h5>
		{ newPost }
		</div>
	)
	}

export default AllPosts;