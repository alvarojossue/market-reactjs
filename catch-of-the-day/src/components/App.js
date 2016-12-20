import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'


class App extends React.Component {

	constructor(){
		super();

		this.addFish = this.addFish.bind(this); // It makes the addFish method available to be used in this component
		this.loadSamples = this.loadSamples.bind(this);
		this.addToOrder = this.addToOrder.bind(this);
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

	addToOrder(key) {
		const order = {...this.state.order}; // Copy of the state
		order[key] = order[key] + 1 || 1; // We update the specific fish order
		this.setState({ order : order }) // Set the new state
	}

	render(){
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market"/>
					<ul className="list-of-fishes">
						{
							Object
								.keys(this.state.fishes) // To transform the object into an array
								.map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>) // Loop through the array and returns a list of components for each fish
						}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order}/>
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
			</div>
		)
	}
}

export default App;