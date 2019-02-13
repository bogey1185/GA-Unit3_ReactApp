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

    const Properties = this.state.propertyList.map((property) => {
      return(
        <div key={property._id}>
          {property.street}
          {property.unit ? `, ${property.unit}, ` : ', '}
          {property.city}, 
          {property.state} 
          {property.zipCode}
        </div>
      )
    })

    return (
      <div>
        {Properties}        
      </div>
  
    )
  }

}



export default DisplayProperty;