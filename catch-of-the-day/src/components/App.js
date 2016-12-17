import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'


class App extends React.Component {

	constructor(){
		super();
		// Initial state. If ES6 is not being used, this is getInitialState (React.createClass)
		this.state = {
			fishes: {},
			order: {}
		}
	}


	render(){
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market"/>
				</div>
				<Order />
				<Inventory />
			</div>
		)
	}
}

export default App;