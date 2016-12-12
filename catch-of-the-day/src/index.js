// let's go!
import React from 'react' // This imports the react package from our dependencies
import { render } from 'react-dom' // This only imports the render function from the react-dom package

import StorePicker from './components/StorePicker'

render(<StorePicker/>, document.querySelector('#main'));