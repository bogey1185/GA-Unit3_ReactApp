import React, { Component } from 'react';
import DisplayEntries from './DisplayEntries';
import CreateEntry from './CreateEntry';
import './index.css';

class PropertyShow extends Component {

  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({
      user: this.props.location.state[0],
      property: this.props.location.state[1]            
    })
  }

  handleClick = (id, btnFaceValue, event) => {
    
  }

  addSubmission = async (newSubmission) => {
    const createRequest = await fetch(`${process.env.REACT_APP_PATH}/api/v1/submissions/`, {
      method: 'POST',
      // credentials: 'include',
      body: JSON.stringify(newSubmission),
      headers: {'Content-Type': 'application/json'}
    })
    
    // check if error is ok
    if(!createRequest.ok) {
        throw Error(createRequest.statusText)
    }

    const parsedCreateRequest = await createRequest.json();
    //update state
    const theState = this.state;
    theState.property.inspectionData.push(parsedCreateRequest.submission);
    this.setState(theState)

  }

  render() {
    
    const property = this.state.property;
    const user = this.state.user;

    return (
      <div className="displayContainer"> 
        <div className="uiContainer">
          <div className="title">
            <p>{property.unit ? property.street + ', ' + property.unit : property.street }</p><br />
            <p>{property.city + ', ' + property.state + ' ' + property.zipCode}</p>
          </div>
          <CreateEntry addSubmission={this.addSubmission} parentProperty={property} />
        </div>
        <div className="photoContainer">
          <DisplayEntries handleClick={this.handleClick} inspectionData={property.inspectionData}/>
        </div>
      </div>
    )
  }

}



export default PropertyShow;