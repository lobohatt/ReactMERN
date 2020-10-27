import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Signup from '../components/Signup/signup';
import Login from '../components/Login/login';
import Home from '../components/home/home';
import Userprofile from '../components/userProfile/userprofile';
import userprofile from '../components/userProfile/userprofile';
import UpdateProfile from '../components/updateprofile/updateprofile';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const token = localStorage.getItem('token');

const Approuter = () => (
 
 <Router history={history}>
 <div>
    <Switch>
     <Route path="/" component={Login} exact={true}/>
     <Route path="/home" component={Home}/>
     <Route path="/signup" component={Signup}/>
     <Route path="/profile"   component={userprofile}/>
     <Route path="/updateprofile"   component={UpdateProfile}/>
    </Switch>
  </div>
 </Router>

);

export default Approuter;
