import React from 'react';
import './counter.css';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ( { counter,inc, dec, rnd } ) => {

		return (
		
		<div id="root" className="jumbotron mx-auto my-auto text-center">
        <h2>{counter}</h2>
        <button 
				onClick = {dec}
				className="btn btn-primary btn-lg ">DEC</button>
        <button 
				onClick= { inc }
				className="btn btn-primary btn-lg mx-2">INC</button>
        <button 
				onClick={ rnd }
				className="btn btn-primary btn-lg">RND</button>

    </div>
		)
	};

	const mapStateToProps = (state) => {
			return {
				counter: state
			}
	};

export default connect(mapStateToProps, actions)(Counter);