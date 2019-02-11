import React, { Component } from 'react';


// for logins, once tenant hits upload, property is switched to 
//read only. subsequent logins by tenenat will only display prior
//documentation. no buttons to add more documents.

class Login extends Component {

  constructor() {
    super();
    this.state = {
      userLogged: false,
      userStatus: ''
    }
  }

  render() {
    return(
      <div>
        <section>

          <form>
            <h4>Tenant Login</h4>
            <label>
              Username:
              <input type="text" name="username" />
            </label>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
            <label>
              Property Code:
              <input type="text" name="property-code" />
            </label>
            <input type="hidden" name="user-designation" value="tenant" />
            <input type="Submit" />
          </form>

        </section>
        <hr />
        <section>
          
          <form>
            <h4>Landlord Login</h4>
            <label>
              Username:
              <input type="text" name="username" />
            </label>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
            <input type="hidden" name="user-designation" value="landlord" />
            <input type="Submit" />
          </form>

        </section>
      </div>
    )
  }
}

export default Login;

