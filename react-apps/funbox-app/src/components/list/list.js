import React from 'react';
import ListItem from '../list-item/';

import './list.css';

const List = ({ todos, onDeleted }) =>{

	const elements = todos.map((item,index) =>{
				return (
					<li 
						className='list-group-item py-1 ' key= { index }>
							<ListItem 
							label = { item } 
							onDeleted={ () => onDeleted(index)  }/>
					</li>
				)
	});

	return (
		<ul 
		className='list-group my-2'>
				{ elements }
		</ul>
	)
}

export default List;