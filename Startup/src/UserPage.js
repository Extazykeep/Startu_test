import React from 'react';
import ProfileInfo from './ProfileInfo';
import ReposList from './ReposList';
import './UserPage.css';

export default function UserPage() {
  return (
    <div className="UserPage">
        <ProfileInfo />
        <ReposList />        
    </div>
  )
}