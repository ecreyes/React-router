import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Inicio from '../pages/Inicio'
import Personajes from '../pages/Personajes';
import About from '../pages/About';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />
					<div className="container">
						<Switch>
							<Route path="/personajes">
								<Personajes/>
							</Route>
							<Route path="/contacto">
								<About/>
							</Route>
							<Route path="/index">
								<Inicio/>
							</Route>
							<Route path="/">
								<Inicio/>
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;