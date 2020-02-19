import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect,Switch} from 'react-router-dom';
import Users from './user/components/pages/Users';
import NewPlace from './places/components/pages/NewPlace';

const App = ()=> {
  
  return (
   <Router>
     <Switch>
    <Route path="/users" exact>
    <Users/>
    </Route>

    <Route path="/places/new" exact>
    <NewPlace/>
    </Route>

    <Redirect to="/users"/>
    </Switch>
  </Router>
  );
} 

export default App;
