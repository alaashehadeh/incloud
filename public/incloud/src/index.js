import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './web.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//global variables
global.host = 'http://localhost:3600/api/v1/';
global.date = null;
global.fromTime = null;
global.toTime = null;
global.user = null;

if(localStorage.user !== undefined) {
    global.user = JSON.parse(localStorage.user);
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
