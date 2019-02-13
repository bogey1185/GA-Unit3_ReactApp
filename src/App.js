import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import TenantHome from './TenantHome';
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

  constructor() {
    super();

    this.state = {
      street: '',
      unit: '',
      city: '',
      state: 'choose',
      zipCode: '',
      propertyCode: '',
      readOnly: false, 
      userState: {
        firstName: '',
        lastName: '',
        businessName: '',
        username: '',
        email: '',
        propertyList: []
      }
    }
  }

  handleLandlordLogin = (newState) => {
    this.setState({
      userState: {
        firstName: newState.firstName,
        lastName: newState.lastName,
        businessName: newState.businessName,
        username: newState.username,
        email: newState.email,
        propertyList: newState.propertyList
      }
    });
  }

  render() {
    return(
      
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" render={(props) => <Login {...props} handleLandlordLogin={this.handleLandlordLogin} state={this.state}/>}  /> 
            <Route exact path="/register" component={ Register } /> 
            <Route exact path="/landlord" render={(props) => <LandlordHome {...props} state={this.state}/>}  />
            <Route exact path="/tenant" component={ TenantHome } />
            <Route component={ My404 } />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
