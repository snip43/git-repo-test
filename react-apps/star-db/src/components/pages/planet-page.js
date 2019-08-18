import React, { Component } from 'react';
import { PlanetDetails, PlanetList } from '../sw-components';
import Row from '../row';

export default class PlanetPage extends Component {

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
							left={ <PlanetList />}
							right={<PlanetDetails itemId={ selectedItem } />} />
			);
	}
}