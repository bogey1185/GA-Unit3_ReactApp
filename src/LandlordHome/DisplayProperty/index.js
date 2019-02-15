import React, { Component } from 'react';


class DisplayProperty extends Component {

  constructor() {
    super();

  }
  
  componentWillMount = () => {
    this.setState(this.props.state)
  }

  render() {
    const properties = this.props.properties.map((property) => {
      return(
        <div key={property._id}>
          {property.street}
          {property.unit ? `, ${property.unit}, ` : ', '}
          {property.city},&nbsp; 
          {property.state}&nbsp; 
          {property.zipCode} &nbsp; 
          {property.propertyCode ? <span className="idCode">{property.propertyCode}</span> : <button onClick={this.props.generatePropertyCode.bind(null, property._id)}>Get Property Code</button>}&nbsp;&nbsp;
          <button onClick={this.props.deleteProperty.bind(null, property._id)}>Delete</button>&nbsp;&nbsp;
          <button onClick={this.props.findPropertyToEdit.bind(null, property._id)}>Edit</button>
        </div>
      )
    })

    return (
      <div>
        {properties}        
      </div>
  
    )
  }

}



export default DisplayProperty;