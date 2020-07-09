import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import axios from 'axios';
import AuthRoute from './util/AuthRoute';

const token = localStorage.t1;
if(token) {
  axios.defaults.headers.common['Authorization'] = token;
  // localStorage.clear()
}


function App() {
  return (
    <div className="App">
      <Router>
      <Route  path='/' exact component={Home}/>
      <AuthRoute token={token} path='/login'  exact component={Login}/>
      </Router>
    </div>
  );
}

export default App;
