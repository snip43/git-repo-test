import React  from 'react';
import { YMaps, Map} from 'react-yandex-maps';
import './maps.css';

const YamapsApi = () => {
	
		return (
		
			<YMaps>
			
				<Map defaultState={{ center: [55.75, 37.57], zoom: 10 }} />
			
			</YMaps>
		
		)
	}

	export default YamapsApi;
