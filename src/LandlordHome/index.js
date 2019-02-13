import React, { Component } from 'react';
import CreateProperty from './CreateProperty'
import DisplayProperty from './DisplayProperty'

class LandlordHome extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  componentWillMount = () => {
    this.setState(this.props.location.state);
  }


  addProperty = async (newProperty) => {

    console.log(newProperty, 'NEW PROPERTY');

    const createRequest = await fetch('http://localhost:9000/api/v1/properties/', {
      method: 'POST',
      // credentials: 'include',
      body: JSON.stringify(newProperty),
      headers: {'Content-Type': 'application/json'}
    })

    if(!createRequest.ok) {
        throw Error(createRequest.statusText)
    }

    const parsedCreateRequest = await createRequest.json();

    if (parsedCreateRequest.sysMsg === 'Address Not Found') {
      this.setState({errorMsg: 'Address not found. Please try again.'})
    } else { // it worked
      this.setState({
        propertyList: [...this.state.propertyList, parsedCreateRequest.property]
      })
      console.log(this.state, ' state PRE update');
      console.log(parsedCreateRequest);
      
    }

  }

  render() {
    console.log(this.state, 'LandlordHome STATE post update');
    
    return (
      <div>
        {this.state.firstName ? 
        <h1>{this.state.businessName ? 
              `${this.state.businessName}` : 
              `${this.state.firstName[0].toUpperCase() + this.state.firstName.slice(1)} 
               ${this.state.lastName[0].toUpperCase() + this.state.lastName.slice(1)}`
            }'s Properties
        </h1> : null}
        {this.state.propertyList.length > 0 ? <DisplayProperty state={this.state} properties={this.state.propertyList} /> : null}
        <CreateProperty addProperty={this.addProperty} state={this.state}/>
        
      </div>
    )
  }

}



export default LandlordHome;