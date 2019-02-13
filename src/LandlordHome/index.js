import React, { Component } from 'react';

class LandlordHome extends Component {

  render() {
    console.log(this.props);
    return (

      <h1>{this.props.firstName} {this.props.lastName}'s HOME PAGE</h1>
    )
  }

}


export default LandlordHome;