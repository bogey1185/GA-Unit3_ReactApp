import React, { Component } from 'react';
import './index.css';

const DisplayEntries = (props) => {

  const entries = props.inspectionData.map((entry) => {
    return (
      <div submission>
        <img src={entry.imgUrl} /><br />
        <p className="entryText">{entry.text}</p>
        <small>Uploaded: {entry.uploadDate}</small>
      </div>
    )
  })

   


  return (
    <div className="photoDisplay">{entries}</div>
  )
}







export default DisplayEntries;