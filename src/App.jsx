// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ArrayVisualizer from './components/ArrayVisualizer';
import { mergeSort } from './components/SortingAlgorithms';
import './styles.css';

const MAX_HEIGHT = 300; // Define the max height for the container

const App = () => {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(50);

  const initArray = () => {
    const newArray = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 500));
    setArray(newArray);
  };

  useEffect(() => {
    initArray();
  }, [arraySize]);

  const changeSize = (event) => {
    setArraySize(event.target.value);
  };

  const randomizeArray = () => {
    initArray();
  };

  const startSort = () => {
    const animations = mergeSort(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'turquoise';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${(newHeight / 500) * MAX_HEIGHT}px`; // Normalize height within max height
        }, i * 10);
      }
    }
  };

  return (
    <div className="App">
      <Navbar
        onInitArray={initArray}
        onChangeSize={changeSize}
        onRandomizeArray={randomizeArray}
        onStartSort={startSort}
      />
      <ArrayVisualizer array={array} />
    </div>
  );
};

export default App;
