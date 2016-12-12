// let's go!
import React from 'react' // This imports the react package from our dependencies
import { render } from 'react-dom' // This only imports the render function from the react-dom package

class StorePicker extends React.Component {
	render(){
		return <p>Hello</p>
	}
}

render(<StorePicker/>, document.querySelector('#main'));