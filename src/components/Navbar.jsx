// src/components/Navbar.js
import React from 'react';

const Navbar = ({ onInitArray, onChangeSize, onRandomizeArray, onStartSort }) => {
  //console.log("hi from nav");
  return (
    <nav>
      <button onClick={onInitArray}>Initialize Array</button>
      <input type="range" min="5" max="100" onChange={onChangeSize} />
      <button onClick={onRandomizeArray}>Randomize Array</button>
      <button onClick={onStartSort}>Start Sort</button>
    </nav>
  );
};

export default Navbar;
