import React, { Component } from 'react';
import './maps.css';

export default class YamapsApi extends Component {
	
	render() {
		return (
			<div className = ''>
				<a 
				href="https://yandex.ru/maps/?um=constructor%3A52a2095c54e94f257dcce7bb3c50ed5a89a1481715b1818e4fc33292808371c9&amp;source=constructorStatic" 
				> 
					<img  className='img-fluid img-thumbnail'
						src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A52a2095c54e94f257dcce7bb3c50ed5a89a1481715b1818e4fc33292808371c9&amp;lang=ru_RU" 
						alt="" />
				</a>
			</div>	
		)
	}
}
