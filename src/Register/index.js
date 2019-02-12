import React, { Component } from 'react';
import './index.css';

class RegisterUser extends Component {

  constructor() {
    super();

    this.state = {
      userDesignation: '',
      firstName: '', 
      lastName: '',
      businessName: '',
      username: '', 
      password: '', 
      email: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  render() {
    console.log(this.state);
    return(
      <div className="login">
        <section className="login-section">

          <form onSubmit={this.handleSubmit}>

            <h4>Sign Up:</h4>
            <div>
              Are you a landlord or tenant? <br />
              <label>
                Landlord
                <input
                  type="radio"
                  name="userDesignation"
                  value="landlord"
                  checked={this.state.userDesignation === 'landlord'}
                  onChange={this.handleChange}
                  required
                />
              </label>
              <label>
                Tenant
                <input
                  type="radio"
                  name="userDesignation"
                  value="tenant"
                  checked={this.state.userDesignation === 'tenant'}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <br />

            <label>
              First Name:
              <input 
                type="text" 
                onChange={this.handleChange} 
                value={this.state.firstName} 
                name="firstName" 
                required
                />
            </label><br />

            <label>
              Last Name:
              <input 
                type="text" 
                onChange={this.handleChange} 
                value={this.state.lastName} 
                name="lastName" 
                required
                />
            </label><br /><br /> 

            {this.state.userDesignation === 'landlord' ? 
              <label>  
                Business Name:<br />
                <input 
                  type="text" 
                  onChange={this.handleChange} 
                  value={this.state.businessName} 
                  name="businessName" 
                /><br /><br /> 
              </label>
            : null}

            <label>
              Username:<br />
              <input 
                type="text" 
                onChange={this.handleChange} 
                value={this.state.username} 
                name="username" 
                required
              />
              <br />
            </label><br />

            <label>
              Email:<br />
              <input 
                type="email" 
                onChange={this.handleChange} 
                value={this.state.email} 
                name="email" 
                required
              />
              <br />
            </label><br />

            <label>
              Password:<br />
              <input 
                type="password" 
                onChange={this.handleChange} 
                value={this.state.password} 
                name="password" 
                required
              />
              <br />
            </label><br />
            <input type="Submit" />
          </form>
          <br />
          
        </section>
      </div>
    )
  }
}





export default RegisterUser;