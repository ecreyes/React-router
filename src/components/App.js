import React from 'react';
import Navbar from './Navbar';

class App extends React.Component{
	render(){
		return(
			<div>
				<Navbar/>
				<div className="container">
					<h1>Hola mundo</h1>
					<hr/>
				</div>
			</div>
		);
	}
}

export default App;