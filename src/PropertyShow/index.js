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

  handleClick = async (id, btnFaceValue, event) => {
    try {
      
      if (btnFaceValue === 'delete') {
        //route for delete button
        const updateRequest = await fetch(`${process.env.REACT_APP_PATH}/api/v1/submissions/${id}`, {
          method: 'DELETE',
          // credentials: 'include',
          headers: {'Content-Type': 'application/json'}
        })
        //check for thrown errors
        if(!updateRequest.ok) {
            throw Error(updateRequest.statusText)
        }
        const parsedRequest = await updateRequest.json();

        console.log(this.state, "THIS STATE)");
        console.log(parsedRequest._id);
       
        let matchingIdx = null;
        const dataArray = this.state.property.inspectionData;
        for (let i = 0; i < dataArray.length; i++) {
          const values = Object.values(dataArray[i]);
          if (values.includes(parsedRequest._id)) {
            matchingIdx = i;
          }
        }

        const theState = this.state;
        theState.property.inspectionData.splice(matchingIdx, 1);
        this.setState(theState);

        console.log(this.state, 'THE NEW STATE');

      } else {
        //route for edit button
      }
          
    } catch (err) {
      console.log(err);
      return(err);
    
    }
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