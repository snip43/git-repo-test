import React, { Component } from 'react';
import { YMaps, Map} from 'react-yandex-maps';

import './maps.css';

export default class YamapsApi extends Component {

state = {
	mapState: {
		center: [55.75, 37.57],
		zoom: 9,
		controls: ['zoomControl'],
		modules: ['geocode']
	}
}



render() {
	const { mapState }  = this.state;

	

return (
		

		<YMaps 
			
			query={{
				ns: 'use-load-option',
				apikey: "8f42e052-d447-4449-976a-1f7e03ad7c41",
				load:
					'Map,Placemark,control.ZoomControl,geoObject.addon.balloon'
			}}
		>
			<Map 
				state = { mapState } >
			</Map>
		</YMaps>

		
		)
	}
}
