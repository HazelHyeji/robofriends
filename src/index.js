import React from 'react';
import ReactDOM from 'react-dom';
import tachyons from 'tachyons';
import './index.css';
import App from './containers/App.js'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
