import React, { Fragment } from 'react'

import { Button } from 'react-bootstrap'

const uuidv4 = require('uuid/v4');

let PostToDB = (data) => {

  fetch('http://localhost:5000/api/names', {
    method: 'POST',
    body: JSON.stringify({_id: uuidv4(), name: data}),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => {

    console.log('Success:', JSON.stringify(response))

  })
  .catch(error => console.error('Error:', error));
}

export default function AddData() {
  return (
    <Fragment>
      <div className="container">
      <div className="form-group">
        <label>Name:</label>
        <input  type="text" 
                className="form-control" 
                id="inputName" 
                aria-describedby="inputName" 
                placeholder="Enter Name" 
        />
      </div>
      <Button type="submit" className="btn btn-primary" block 
      onClick={() => PostToDB(document.getElementById('inputName').value)} >Submit</Button>
      </div>
    </Fragment>
  )
}