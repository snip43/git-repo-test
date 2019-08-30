import React from 'react';
import PropTypes from 'prop-types';
import './row.css';

const Row = ({ left, right }) => {
	
		return (
				<div className="row my-3">
					<div className="col">
						{left}
					</div>
					<div className="col">
						{right}
					</div>
				</div>
		);
};

Row.propTypes = {
	left: PropTypes.node,
	right: PropTypes.node
}

export default Row;