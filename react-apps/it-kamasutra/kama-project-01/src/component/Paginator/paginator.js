import React from 'react';

import './paginator.css'

const Paginator = ({totalPeople,pageSize,currentPage,onPageChanged}) => {
	let pageCount = Math.ceil(totalPeople / pageSize);
	let total = [];
	for(let i=1;i<= pageCount; i++){
		total.push(i)
	}

return(
		<div className='pages'>
		{
			total.map( (p,index) =>	<span 
															key={index} 
															className={ currentPage === p ? 'selectedPage page' : 'page'	} 
															onClick = { ()=> onPageChanged(p)}> 
															{p} 
				</span> )
		}
	</div>
)}

export default Paginator;

