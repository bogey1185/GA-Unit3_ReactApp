import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import PropertyShow from './PropertyShow';
import LandlordHome from './LandlordHome';
import Register from './Register';



const My404 = () => {
  return (
    <div>
      Error 404: Page Not Found
    </div>
  )
}

class App extends Component {

  render() {
    return(
      
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={ Login } /> 
            <Route exact path="/register" component={ Register } /> 
            <Route exact path="/landlord" component={ LandlordHome }  />
            <Route exact path="/property" component={ PropertyShow } />
            <Route component={ My404 } />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
