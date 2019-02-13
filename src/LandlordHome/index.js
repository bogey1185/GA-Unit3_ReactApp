import React, { Component } from 'react';
import CreateProperty from './CreateProperty'

class LandlordHome extends Component {

  constructor() {
    super();

  }

  componentWillMount = () => {
    this.setState(this.props.state)
  }

  addProperty = (newProperty, e) => {
    e.preventDefault();
    console.log(e, 'event');
    console.log('hitting addProperty');
    console.log(newProperty, 'NEW PROPERTY');
  }

  render() {
    console.log(this.state, 'LandlordHome STATE');
    console.log(this.props, 'LandlordHome PROPS');
    
    return (
      <div>
        {this.state.userState.firstName ? 
        <h1>{this.state.userState.businessName ? 
              `${this.state.userState.businessName}` : 
              `${this.state.userState.firstName[0].toUpperCase() + this.state.userState.firstName.slice(1)} 
               ${this.state.userState.lastName[0].toUpperCase() + this.state.userState.lastName.slice(1)}`
            }'s Properties
        </h1> : null}
        <CreateProperty addProperty={this.addProperty} state={this.state}/>
      </div>
    )
  }

}



export default LandlordHome;