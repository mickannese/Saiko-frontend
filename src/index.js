import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Saiko from './Saiko.jsx';
import Login from './Login.jsx';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Saiko />
  </BrowserRouter>
  , document.getElementById('app'));