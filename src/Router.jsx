import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import App from './App.jsx'
import Parsed from '../sample-data/sample-data.js';
import userinfo from '../sample-data/userGET.js';
import Controller from './controllers/Controller.js';
import Login from './Login.jsx';


//controller.get(users)

let cont = new Controller();

const Main = () => (
  <Switch>
    <Route exact path='/login' component={Login} />
    <Route exact path='/' render={() => (
      <App
        controller={cont}
        messages={Parsed}
        userInfo={userinfo}
      />
    )} />
  </Switch>
);

export default Main;



