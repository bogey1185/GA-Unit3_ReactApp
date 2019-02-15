import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class DisplayEntries extends Component {

  constructor() {
    super();
  }

  componentWillMount() {
    this.setState(this.props);
  }

  render() {
    // add links to the photos so when you click, they get bigger
    const entries = this.state.inspectionData.map((entry) => {
      return (
        <div className="submission" key={entry._id}>
          <img src={entry.imageUrl} /><br />
          <p className="entryText">{entry.text}</p>
          <div>
            <button onClick={this.state.handleClick.bind(null, entry._id, 'delete')}>Delete</button>
            <button onClick={this.state.handleClick.bind(null, entry._id, 'edit')}>Edit</button>
          </div>
        </div>
      )
    })
  
    return (
      <div className="photoDisplay">{entries}</div>
    )
    
  }

}







export default DisplayEntries;