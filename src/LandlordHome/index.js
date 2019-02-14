import React, { Component } from 'react';
import CreateProperty from './CreateProperty'
import DisplayProperty from './DisplayProperty'
import EditProperty from './EditProperty'

class LandlordHome extends Component {

  constructor() {
    super();
    this.state = {
      editProperty: null
    }
  }

  componentWillMount = () => {
    this.setState(this.props.location.state);
  }


  addProperty = async (newProperty) => {

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
    }

  }

  generatePropertyCode = async (id) => {

    //build random code
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

    let randomHash = '';

    while (randomHash.length < 25) {
      randomHash += charSet[Math.floor(Math.random()*charSet.length)];
    }

    // query db update route with hash code
    const updateRequest = await fetch(`http://localhost:9000/api/v1/properties/${id}`, {
      method: 'PUT',
      // credentials: 'include',
      body: JSON.stringify([randomHash]),
      headers: {'Content-Type': 'application/json'}
    })

    if(!updateRequest.ok) {
        throw Error(updateRequest.statusText)
    }
    
    //parse response
    const parsedUpdateRequest = await updateRequest.json();

    //update state by mapping over old array, and inserting new property with code in place of old where id's match
    this.setState({
      propertyList: await this.state.propertyList.map((property) => {
        if (property._id === parsedUpdateRequest.property._id) {
          return parsedUpdateRequest.property;
        } else {
          return property;
        }
      })
    })

  }

  deleteProperty = async (id) => {
    //this function will ONLY delete from landlord's propertyList array 
    //because we dont want the landlord to be able to delete the listing 
    //if the tenant uploads some solid damage photos. deleting from the 
    //array will prevent it from appearing on landlord's home page, though.

    //send query to DB -- will be update request because not deleting the whole db entry
    const updateRequest = await fetch(`http://localhost:9000/api/v1/users/${id}`, {
      method: 'PUT',
      // credentials: 'include',
      headers: {'Content-Type': 'application/json'}
    })
    //check for thrown errors
    if(!updateRequest.ok) {
        throw Error(updateRequest.statusText)
    }
    //parse response from server
    const parsedUpdateRequest = await updateRequest.json();
    //update state to reflect changes
    this.setState({
      propertyList: this.state.propertyList.filter((property) => {
        if (property._id !== parsedUpdateRequest.data) return property;
      })
    })
  }

  findPropertyToEdit = async (id) => {
  
    //get the property data you want to edit
    const request = await fetch(`http://localhost:9000/api/v1/properties/${id}`, {
      method: 'GET',
      // credentials: 'include',
      headers: {'Content-Type': 'application/json'}
    })
    //check for thrown errors
    if(!request.ok) {
        throw Error(request.statusText)
    }
    //parse response from server - we now have the property we want to edit
    //in parsedRequest.data
    const parsedRequest = await request.json();
    //add edit property to state so we can render the appropriate forms
    this.setState({
      editProperty: parsedRequest.data
    })
  }

  editProperty = async (edittedProperty) => {

    const editRequest = await fetch(`http://localhost:9000/api/v1/properties/${edittedProperty._id}/edit`, {
        method: 'PUT',
        // credentials: 'include',
        body: JSON.stringify(edittedProperty),
        headers: {'Content-Type': 'application/json'}
    })

    if(!editRequest.ok) {
        throw Error(editRequest.statusText)
    }

    const parsedEditRequest = await editRequest.json();

    if (parsedEditRequest.sysMsg === 'Address Not Found') {
      this.setState({errorMsg: 'Address not found. Please try again.'})
    } else { // it worked
      this.setState({
        editProperty: '',
        propertyList: parsedEditRequest.data.propertyList
      })      
    }
    
  }

  render() {
    
    return (
      <div>
        {this.state.firstName ? 
        <h1>{this.state.businessName ? 
              `${this.state.businessName}` : 
              `${this.state.firstName[0].toUpperCase() + this.state.firstName.slice(1)} 
               ${this.state.lastName[0].toUpperCase() + this.state.lastName.slice(1)}`
            }'s Properties
        </h1> : null}
        {this.state.propertyList.length > 0 ? <DisplayProperty properties={this.state.propertyList} generatePropertyCode={this.generatePropertyCode} deleteProperty={this.deleteProperty} findPropertyToEdit={this.findPropertyToEdit} /> : null}
        {this.state.editProperty ? 
          <EditProperty editProperty={this.editProperty} state={this.state} /> : 
          <CreateProperty addProperty={this.addProperty} state={this.state}/>
        }
        
      </div>
    )
  }

}



export default LandlordHome;