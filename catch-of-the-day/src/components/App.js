import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'


class App extends React.Component {

	constructor(){
		super();

		this.addFish = this.addFish.bind(this); // It makes the addFish method available to be used in this component
		// Initial state. If ES6 is not being used, this is getInitialState (React.createClass)
		this.state = {
			fishes: {},
			order: {}
		}
	}

	addFish(fish) {
		// Update our state
		const fishes = {...this.state.fishes}; // This takes a copy of the state
		// Add in our new fish
			const timestamp = Date.now(); // Creates a unique number to identify each fish
			fishes[`fish-${timestamp}`] = fish
		// Set state
		this.setState({ fishes : fishes }) // We pass what has been changed. In this case, we update the object fishes with the new version of it created
	}


	render(){
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market"/>
				</div>
				<Order />
				<Inventory addFish={this.addFish} />
			</div>
		)
	}
}

export default App;