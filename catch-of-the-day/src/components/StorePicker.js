import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {

	goToStore(event){
		event.preventDefault(); // Prevents button from submitting and redirecting
		const storeId = this.storeInput.value; // Gets the text from the box
		this.context.router.transitionTo(`/store/${storeId}`); // Transition to the store url
	}

	render(){
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}> {/* On submit, execute the goToStore function */}
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/> {/* To be able to access the input text through storeInput from the goToStore function */}
				<button type="submit"> Visit Store </button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;