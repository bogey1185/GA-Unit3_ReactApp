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

  render() {
    console.log(this.state, 'STATE on PROP SHOW');
    const property = this.state.property;
    const user = this.state.user;
    return (
      <div className="displayContainer"> 
        <div className="uiContainer">
          <div className="title">
            <p>{property.unit ? property.street + ', ' + property.unit : property.street }</p><br />
            <p>{property.city + ', ' + property.state + ' ' + property.zipCode}</p>
          </div>
          <CreateEntry />
        </div>
        <div className="photoContainer">
          <DisplayEntries inspectionData={property.inspectionData}/>
        </div>
      </div>
    )
  }

}



export default PropertyShow;