import React from 'react';
import { formatPrice } from '../helpers'

class Fish extends React.Component {
	render(){

		const {details}=this.props; // To avoid writing this.props.details.name everytime (shortcut)
		const isAvailable = details.status === 'available';
		const buttonText = isAvailable ? 'Add to Order' : 'Sold Out!' // If it's available, the button text would be 'Add to Order', else it would be 'Sold Out!'

		return(
			<li className="menu-fish">
				<img src={details.image} alt={details.name} />
				<h3 className="fish-name">
					{details.name}
					<span className="price"> {formatPrice(details.price)} </span>
				</h3>
				<p>{details.desc}</p>
				<button onClick={() => this.props.addToOrder(this.props.index)} disabled={!isAvailable}>{buttonText}</button> {/* On click we call the addToOrder function with the index to identify which fish order we are adding to*/}
			</li>
		)
	}
}

export default Fish;

