import React, { Component } from 'react';
import './index.css';


class CreateEntry extends Component {

  constructor() {
    super();
    this.state = {
      parentPropertyId: '',
      imageUrl: '',
      text: '',
      uploadDate: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addSubmission({
      parentPropertyId: this.props.parentProperty._id,
      imageUrl: this.state.imageUrl,
      text: this.state.text,
      uploadDate: ''
    });
    // clear state
    this.setState({
      parentPropertyId: '',
      imageUrl: '',
      text: '',
      uploadDate: ''
    })
  }
  

  render() {
    return (
      <div className="class-form">
        <h3>Create New Entry</h3>
        <form onSubmit={this.handleSubmit}>
          <h4>Image URL:</h4>
          <input type="url" name="imageUrl" onChange={this.handleChange} value={this.state.imageUrl} />
          <br />
          <h4>Damage Description:</h4> 
          <textarea className="textBox" type="text" name="text" onChange={this.handleChange} value={this.state.text} />
          <br /><br />
          <button type="submit">Create Entry</button>
        </form>

      </div>
    )
  }

}









export default CreateEntry;