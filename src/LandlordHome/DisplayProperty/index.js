import React, { Component } from 'react';


class DisplayProperty extends Component {

  constructor() {
    super();

  }
  

  componentWillMount = () => {
    this.setState(this.props.state)
  }

  render() {

    console.log(this.state, 'DisplayProperty STATE');

    const properties = this.props.properties.map((property) => {
      return(
        <div key={property._id}>
          {property.street}
          {property.unit ? `, ${property.unit}, ` : ', '}
          {property.city},&nbsp; 
          {property.state}&nbsp; 
          {property.zipCode}
          {property.propertyCode ? <div className="idCode">{property.propertyCode}</div> : <button>Get Property Code</button>}
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