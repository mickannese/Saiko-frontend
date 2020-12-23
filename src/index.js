import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Parsed from '../sample-data/sample-data.js';
import userinfo from '../sample-data/userGET.js';
import Controller from './controllers/Controller.js';

let cont = new Controller();
ReactDOM.render(<App controller={cont} messages={Parsed} userInfo={userinfo} />, document.getElementById('app'));