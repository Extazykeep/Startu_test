import React from 'react';
import image from '../src/Frame.png';
import './Search.css';
import store from "./store"


async function searchUser(user) {  
  const userData = await fetch(`https://api.github.com/users/${user}`).then((res)=> res.json());  
  if(userData.login) {
    store.dispatch({type: "set", userData})
  }
  else store.dispatch({type: "set", userData}) 
}


function handleKeyPress(ev){ 
    if(ev.key === 'Enter'){
    searchUser(ev.target.value)
      ev.target.value = "";
    }  
}
export default function SearchBar() { 
  return (
    <div className="SearchBar">      
      <img src={image} alt="someimg" />
      <input type="text" placeholder="Enter github username" onKeyPress={handleKeyPress}></input>
    </div>
  );
}
