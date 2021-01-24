import React from 'react';
import "../styles/SearchBar.css";

export default function SearchBar() {
  return (
    <div>
      <input id="textbox" className="textbox" type="text" placeholder="Enter the movie..."></input>
    </div>
  )
}