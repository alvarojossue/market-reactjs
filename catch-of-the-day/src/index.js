// let's go!
import React from 'react' // This imports the react package from our dependencies
import { render } from 'react-dom' // This only imports the render function from the react-dom package
import './css/style.css'
import App from './components/App'
import StorePicker from './components/StorePicker'

render(<App/>, document.querySelector('#main'));
