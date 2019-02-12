import React, { Component } from 'react';
import './index.css';

// for logins, once tenant hits upload, property is switched to 
//read only. subsequent logins by tenenat will only display prior
//documentation. no buttons to add more documents.

class Login extends Component {

  constructor() {
    super();
    this.state = {
      userLogged: false,
      userDesignation: '', 
      tenantUsername: '', 
      tenantPassword: '',
      tenantPropertyCode: '',
      landlordUsername: '',
      landlordPassword: ''
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

          <form>
            <h4>Tenant Login</h4>
            <label>
              Username:
              <br />
              <input type="text" onChange={this.handleChange} value={this.state.tenantUsername} name="tenantUsername" />
            </label>
              <br />
            <label>
              Password:
              <br />
              <input type="password" onChange={this.handleChange} value={this.state.tenantPassword} name="tenantPassword" />
            </label>
              <br />
            <label>
              Property Code:
              <br />
              <input type="text" onChange={this.handleChange} value={this.state.tenantPropertyCode} name="tenantPropertyCode" />
            </label>
              <br />
            <input type="hidden" name="userDesignation" value="tenant" />
              <br />
            <input type="Submit" />
          </form>

        </section>
        
        <section className="login-section">
          
          <form>
            <h4>Landlord Login</h4>
            <label>
              Username:
              <br />
              <input type="text" onChange={this.handleChange} value={this.state.landlordUsername} name="landlordUsername" />
            </label>
              <br />
            <label>
              Password:
              <br />
              <input type="password" onChange={this.handleChange} value={this.state.landlordPassword} name="landlordPassword" />
            </label>
              <br />
            <input type="hidden" name="userDesignation" value="landlord" />
              <br />
            <input type="Submit" />
          </form>

        </section>
      </div>
    )
  }
}

export default Login;


















