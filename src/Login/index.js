import React, { Component } from 'react';


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
      <div>
        <section>

          <form>
            <h4>Tenant Login</h4>
            <label>
              Username:
              <input type="text" onChange={this.handleChange} value={this.state.tenantUsername} name="tenantUsername" />
            </label>
            <label>
              Password:
              <input type="password" onChange={this.handleChange} value={this.state.tenantPassword} name="tenantPassword" />
            </label>
            <label>
              Property Code:
              <input type="text" onChange={this.handleChange} value={this.state.tenantPropertyCode} name="tenantPropertyCode" />
            </label>
            <input type="hidden" name="userDesignation" value="tenant" />
            <input type="Submit" />
          </form>

        </section>
        <hr />
        <section>
          
          <form>
            <h4>Landlord Login</h4>
            <label>
              Username:
              <input type="text" onChange={this.handleChange} value={this.state.landlordUsername} name="landlordUsername" />
            </label>
            <label>
              Password:
              <input type="password" onChange={this.handleChange} value={this.state.landlordPassword} name="landlordPassword" />
            </label>
            <input type="hidden" name="userDesignation" value="landlord" />
            <input type="Submit" />
          </form>

        </section>
      </div>
    )
  }
}

export default Login;

