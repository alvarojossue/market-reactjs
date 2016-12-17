import React from 'react'

class AddFishForm extends React.Component {
	createFish(event){
		event.preventDefault();
		console.log("We are about to create a fish")

		const fish = { // Saving all this inputs from the user into an object to share it with other components
			name: this.name.value,
			price: this.price.value,
			status: this.status.value,
			desc: this.desc.value,
			image: this.image.value,
		}

		console.log(fish);


	}

	render(){
		return (
			<form className="fish-edit" onSubmit={(e) => this.createFish(e)}> { /* On submit, it executes the method createFish */}
				<input ref={(input) => {this.name = input}} type="text" placeholder="Fish Name"/> { /* It uses ref to be able to reuse the info from each input in a method outside render(); */}
				<input ref={(input) => {this.price = input}} type="text" placeholder="Fish Price"/>
				<select ref={(input) => {this.status = input}}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea ref={(input) => {this.desc = input}} placeholder="Fish Desc"></textarea>
				<input ref={(input) => {this.image = input}} type="text" placeholder="Fish Image" />
				<button type="submit">+ Add Fish</button>
			</form>
		)
	}
}

export default AddFishForm;