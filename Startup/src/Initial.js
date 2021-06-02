import React from 'react';
import image  from './search.png';
import './Initial.css';

export default function Initial() {
  return (
    <div className="Initial">
      <img src ={image} />
      <p>Start with a searching a GitHub user</p>
    </div>
  )
}