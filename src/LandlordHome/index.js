import React, { Component } from 'react';
import CreateProperty from './CreateProperty'

class LandlordHome extends Component {

  constructor() {
    super();

  }

  componentWillMount = () => {
    this.setState(this.props.location.state);
  }


  addProperty = async (newProperty, event) => {
    event.preventDefault();
    console.log(newProperty, 'NEW PROPERTY');

    //create package of data for processing
    const creationData = {
      ownerUsername: newProperty.username,
      street: newProperty.street,
      unit: newProperty.unit,
      city: newProperty.city,
      state: newProperty.state,
      zipCode: newProperty.zipCode,
      readOnly: false,
      businessName: newProperty.businessName,
      email: newProperty.email,
      firstName: newProperty.firstName,
      lastName: newProperty.lastName,
      password: newProperty.password,
      propertyList: newProperty.propertyList, 
      username: newProperty.username

    }
                            
    const createRequest = await fetch('http://localhost:9000/api/v1/properties/new', {
      method: 'POST',
      // credentials: 'included',
      body: JSON.stringify(creationData),
      headers: {'Content-Type': 'application/json'}
    })

    //CONTINUE ONCE RESPONSE RECEIVED


  }

  render() {
    console.log(this.state, 'LandlordHome STATE');
    console.log(this.props, 'LandlordHome PROPS');
    
    return (
      <div>
        {this.state.firstName ? 
        <h1>{this.state.businessName ? 
              `${this.state.businessName}` : 
              `${this.state.firstName[0].toUpperCase() + this.state.firstName.slice(1)} 
               ${this.state.lastName[0].toUpperCase() + this.state.lastName.slice(1)}`
            }'s Properties
        </h1> : null}
        <CreateProperty addProperty={this.addProperty} state={this.state}/>
      </div>
    )
  }

}



export default LandlordHome;