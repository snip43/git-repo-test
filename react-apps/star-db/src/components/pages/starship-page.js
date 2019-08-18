import React, { Component } from 'react';
import { StarshipDetails, StarshipList } from '../sw-components';
import Row from '../row';

export default class StarshipPage extends Component {

	state ={
		selectedItem: null
	}

	omItemSelected = (selectedItem) => {
		this.setState({selectedItem})
	};

	render(){

		const { selectedItem } = this.state;

			return (
					
						<Row
							left={ <StarshipList />}
							right={<StarshipDetails itemId={selectedItem} />} />
			);
	}
}