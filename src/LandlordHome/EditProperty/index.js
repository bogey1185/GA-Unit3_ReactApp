import React, { Component } from 'react';

class EditProperty extends Component {

  constructor() {
    super();

    this.state = {
      street: '',
      unit: '',
      city: '', 
      state: '', 
      zipCode: ''
    }
  }

  componentDidMount = () => {
    this.setState(this.props.state.editProperty)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editProperty(this.state);
    // clear state
    this.setState({
      street: '',
      unit: '',
      city: '', 
      state: '', 
      zipCode: ''
    })
  }

  render() {
    return (
      <div>
        
        <h4>Edit Your Property</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            Street Address:
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.street}
              name="street"
              required
            />
          </label><br />

          <label>
            Unit/Apt/Suite:
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.unit}
              name="unit"
            />
          </label><br />

          <label>
            City:
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.city}
              name="city"
            />
          </label><br />

          <label>
            State:
            <select name="state" value={this.state.state} onChange={this.handleChange}>
              <option value="choose">Choose</option>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AZ">AZ</option>
              <option value="AR">AR</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="IA">IA</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="ME">ME</option>
              <option value="MD">MD</option>
              <option value="MA">MA</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MS">MS</option>
              <option value="MO">MO</option>
              <option value="MT">MT</option>
              <option value="NE">NE</option>
              <option value="NV">NV</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NY">NY</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WV">WV</option>
              <option value="WI">WI</option>
              <option value="WY">WY</option>             
            </select>
          </label><br />

          <label>
            Zip Code:
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.zipCode}
              name="zipCode"
            />
          </label><br />

          <input type="submit" value="Submit" />

        {this.props.state.errorMsg ? <small>{this.props.state.errorMsg}</small> : null}
        </form>
      </div>
    )
  }

}



export default EditProperty;