import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import axios from 'axios'

const token = localStorage.t1;
if(!token) {
    window.location.href = '/login';
  }else {
    axios.defaults.headers.common['Authorization'] = token;
  }


function App() {
  return (
    <div className="App">
      <Router>
      <Route path='/' exact component={Home}/>
      <Route path='/login' component={Login}/>
      </Router>
    </div>
  );
}

export default App;
