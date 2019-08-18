import React, { Component } from 'react';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';

export default class PeoplePage extends Component {

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
							left={ <PersonList />}
							right={<PersonDetails itemId={selectedItem} />} />
			);
	}
}