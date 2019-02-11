import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Login from './Login';


const My404 = () => {
  return (
    <div>
      You are lost!!!!
    </div>
  )
}

const App = () => {
  return (
    
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={ Login } /> 
          <Route component={ My404 } />
        </Switch>
      </main>
    </div>

  )
}

export default App;
