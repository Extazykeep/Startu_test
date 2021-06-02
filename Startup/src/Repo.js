import React from 'react';


export default function Repo(props) {
return (
  <div className="Repo">
    <a href={props.url} rel="noreferrer" target="_blank">{props.name}</a>
    <p>{props.description ? props.description : "No description"}</p>
  </div>
)
}