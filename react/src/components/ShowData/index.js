import React, {useState} from 'react';

let GetMyData = (mystate) => {
  fetch('http://localhost:5000/api/names')
  .then(resp => resp.json())
  .then(data => mystate({names : data}))
  .catch(e => console.log(e))
}

export default function ShowData() {

  const [remoteData, setData] = useState({ names: [] });

  GetMyData(setData)

  return (
    <ul>
      {remoteData.names.map((n, i) => {
        return  <li key={i}>
                  <a href={`?id=${n._id}`}> {n.name}</a>
                </li>
      })}  
    </ul>
  );
}