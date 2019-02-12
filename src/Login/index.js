import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

// for logins, once tenant hits upload, property is switched to 
//read only. subsequent logins by tenenat will only display prior
//documentation. no buttons to add more documents.

class Login extends Component {

  constructor() {
    super();
    this.state = {
      userLogged: false,
      userDesignation: '', 
      propertyCode: '',
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const loginCredentials = {
        username: this.state.username,
        password: this.state.password
      }

      const loginResponse = await fetch('http://localhost:9000/api/v1/users/login', {
        method: 'POST',
        credentials: 'included',
        body: JSON.stringify(loginCredentials),
        headers: {'Content-Type': 'application/json'}
      })

      if (!loginResponse.ok) {
        throw Error(loginResponse.statusText)
      }

      const parsedLoginResponse = await loginResponse.json();

      if (parsedLoginResponse.data === 'login successful'){

        if (this.state.userDesignation === 'landlord') {
          this.props.history.push('/landlord');
        } else {
          this.props.history.push('/tenant'/*add property code
            to the path so that it goes to specific page?*/);
            //need to change state to logged somewhere?
        }
      }
              
    } catch (err) {
      console.log(err);
      return(err);
        
    }    
  }

  render() {

    console.log(this.state);
    return(
      <div className="login">
        <section className="login-section">

          <form onSubmit={this.handleSubmit}>

            <h4>Please Login:</h4>
            <div>
              Are you a landlord or tenant? <br />
              <label>
                <input
                  type="radio"
                  name="userDesignation"
                  value="landlord"
                  checked={this.state.userDesignation === 'landlord'}
                  onChange={this.handleChange}
                  required
                />
                Landlord
              </label>
              <label>
                <input
                  type="radio"
                  name="userDesignation"
                  value="tenant"
                  checked={this.state.userDesignation === 'tenant'}
                  onChange={this.handleChange}
                  required
                />
                Tenant
              </label>
            </div>
            <br />
            <label>
              Username:<br />
              <input 
                type="text" 
                onChange={this.handleChange} 
                value={this.state.username} 
                name="username" 
                required
              /><br />
            </label><br />
            <label>
              Password:<br />
              <input 
                type="password" 
                onChange={this.handleChange} 
                value={this.state.password} 
                name="password" 
                required
              /><br />
            </label><br />
            {this.state.userDesignation === 'tenant' ? 
              <label>  
                Property Code:<br />
                <input 
                  type="text" 
                  onChange={this.handleChange} 
                  value={this.state.propertyCode} 
                  name="propertyCode" 
                  required
                />
                <br /><br />
              </label>
            : null}
            <input type="Submit" />
          </form>
          <br />
          <small> Need an account? <Link to='/register'>Sign up</Link></small>

        </section>
      </div>
    )
  }
}

export default Login;


















