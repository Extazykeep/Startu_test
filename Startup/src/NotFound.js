import React from 'react';
import image from './user.png';
import './Initial.css'

export default function NotFound() {
  return(
    <div className="Initial">
      <img src ={image} alt="usefulalt"/>
      <p>User not found</p>
    </div>
  )
}