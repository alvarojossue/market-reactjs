// let's go!
import React from 'react' // This imports the react package from our dependencies
import { render } from 'react-dom' // This only imports the render function from the react-dom package
import {BrowserRouter, Match, Miss} from 'react-router'
import './css/style.css'
import App from './components/App'
import StorePicker from './components/StorePicker'
import NotFound from './components/NotFound'

const Root = () => {
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={StorePicker} />
				<Match exactly pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}


render(<Root/>, document.querySelector('#main'));
