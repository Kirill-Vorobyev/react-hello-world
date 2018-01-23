import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// import Assignment2 from './Assignment2/Assignment2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Hello World, This is React" />, document.getElementById('root'));
registerServiceWorker();
