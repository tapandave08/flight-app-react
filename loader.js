import React, { Component } from 'react';
import loader from '../../img/loader.gif';

const Loader = (props) => {
	return (
		<div className="loader">
			<img src={loader} alt="Loading" />
		</div>
	);
};
export default Loader;
