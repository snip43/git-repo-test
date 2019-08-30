import React, { Component } from 'react';
import './list-item.css';


export default class ListItem extends Component {
	render(){
		return (
			<ul className='border border-info px-3 list mt-2'>
				<li >1
				<button type="button" className="close" aria-label="Close">
  					<span aria-hidden="true">&times;</span>
				</button>
				</li>
				<li>2
				<button type="button" className="close" aria-label="Close">
  					<span aria-hidden="true">&times;</span>
				</button>
				</li>
				<li>3
				<button type="button" className="close" aria-label="Close">
  					<span aria-hidden="true">&times;</span>
				</button>
				</li>
				<li>4
				<button type="button" className="close" aria-label="Close">
  					<span aria-hidden="true">&times;</span>
				</button>
				</li>
				<li>5
				<button type="button" className="close" aria-label="Close">
  					<span aria-hidden="true">&times;</span>
				</button>
				</li>
			</ul>
		)
	}
}