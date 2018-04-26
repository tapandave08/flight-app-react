import React, { Component } from 'react';
import './scss/app.css';
import DashBoard from './dashBoard';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route path="/" exact component={DashBoard} />
					<Route path="*" component={() => <div className = "not-found"><p>No Page found</p></div>} />
				</Switch>
			</div>
		);
	}
}

export default App;
