import React from 'react';
import SideBarSearch from './sidebar-search';

const SideBar = (props) => {
	return (
		<aside className="App-nav">
			<SideBarSearch {...props} />
		</aside>
	);
};
export default SideBar;
