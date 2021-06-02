import React from 'react';
import SearchBar from './SearchBar';
import './App.css';
import MainContent from './MainContent';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <SearchBar />
      </header>
      <MainContent />
    </div>
  );
}

export default App;



