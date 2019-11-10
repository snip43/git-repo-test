import React from 'react';

import './pages.css'

const Pages = (props) => {
	let pageCount = Math.ceil(props.totalPeople / props.pageSize);
	let total = [];
	for(let i=1;i<= pageCount; i++){
		total.push(i)
	}

return(
		<div className='pages'>
		{
			total.map( (p,index) =>	<span 
															key={index} 
															className={ props.currentPage === p ? 'selectedPage page' : 'page'	} 
															onClick = { ()=> props.onPageChanged(p)}> 
																	 {p} 
				</span> )
		}
	</div>
)}

export default Pages;

