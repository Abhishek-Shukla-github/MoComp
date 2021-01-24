import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import "./styles/App.css";
function App() {
  return (
    <div className="App" className="root">
      <Navbar/>
      <div className="searchDiv">
        <SearchBar />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;