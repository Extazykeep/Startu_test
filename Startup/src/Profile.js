import React from 'react';



export default function Profile(props){
  const obj = JSON.parse(props.data)
return(
  <div className="ProfileInfo">
  <div className="ImageBox">
    <img src={obj.avatar_url} />
  </div>
  <div className="UserInfos">
    <p>{obj.login}</p>
    <a target="_blank" rel="noreferrer" href={obj.html_url}>{obj.login}</a>
    <div className="UserFollows">
        <span>
          {obj.followers} followers
        </span>
        <span>
         {obj.following} following
        </span>
    </div>
  </div>
</div>
)
}