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
				<button disabled={!isAvailable}>{buttonText}</button>
			</li>
		)
	}
}

export default Fish;

