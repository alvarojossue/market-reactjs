import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'


class App extends React.Component {

	constructor(){
		super();

		this.addFish = this.addFish.bind(this); // It makes the addFish method available to be used in this component
		this.loadSamples = this.loadSamples.bind(this);
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

	loadSamples() { // Load sample fishes from sample-fishes.js - remember to first import it
		this.setState({fishes : sampleFishes})
	}


	render(){
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market"/>
				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
			</div>
		)
	}
}

export default App;