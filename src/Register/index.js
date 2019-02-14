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
      email: '',
      errorMsg: ''
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

      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
      //              Create new Landlord               //
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
      
      if (this.state.userDesignation === 'landlord') {
        
        //create package of data to create new account
        const newUser = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          businessName: this.state.businessName,
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
        }

        //send data to server to create user
        const createUserRequest = await fetch(`${process.env.PATH}/api/v1/users/registerlandlord`, {
          method: 'POST',
          // credentials: 'include',
          body: JSON.stringify(newUser),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        //throw error if create failed
        if(!createUserRequest.ok) {
          throw Error(createUserRequest.statusText)
        }

        //recieve response from server and parse from json
        const parsedCreateRequest = await createUserRequest.json();
        
        //if create successful, return to login page
        if (parsedCreateRequest.sysMsg === 'user created!') {
          this.props.history.push('/');

        } else {
          
          //if create unsuccessful because username taken, update
          //state with error message so it can render!
          this.setState({
            errorMsg: 'Username taken. Please try again.'
          })
        }

      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
      //              Create new Tenant                 //
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
      } else {

        //create package of data to create new account
        const newUser = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
        }

        //send data to server to create user
        const createUserRequest = await fetch(`${process.env.PATH}/api/v1/users/registertenant`, {
          method: 'POST',
          // credentials: 'include',
          body: JSON.stringify(newUser),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        //throw error if create failed
        if(!createUserRequest.ok) {
          throw Error(createUserRequest.statusText)
        }

        //recieve response from server and parse from json
        const parsedCreateRequest = await createUserRequest.json();
        
        //if create successful, return to login page
        if (parsedCreateRequest.sysMsg === 'user created!') {
          this.props.history.push('/');

        } else {
          
          //if create unsuccessful because username taken, update
          //state with error message so it can render!
          this.setState({
            errorMsg: 'Username taken. Please try again.'
          })
        }
      }       
    } catch (err) {
      console.log(err);
      return(err);
    }
  }


  render() {
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
          
          {this.state.errorMsg ? <small>{this.state.errorMsg}</small> : null}
        </section>
      </div>
    )
  }
}





export default RegisterUser;