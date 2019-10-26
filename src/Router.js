import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => <Router>
    <div>
    <Route exact path='/' component={Login}></Route>
    <Route path='/dashboard' component={Dashboard}></Route>
    </div>
    </Router>;

export default App;