import React from 'react';

const NavPanel = (props) => {
	return (
		<nav className="App-nav-panel">{props.from} - {props.to}</nav>
	);
};
export default NavPanel;
