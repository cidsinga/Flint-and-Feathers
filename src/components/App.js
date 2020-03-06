import React from 'react';
import './App.css';
import Header from './Header';
import { Switch, Route, Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Header}/>
      </Switch>

    </div>
  );
}

export default App;
