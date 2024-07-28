// src/components/ArrayVisualizer.js
import React from 'react';
import '../styles.css';

const MAX_HEIGHT = 300; // This should match the max-height in CSS

const ArrayVisualizer = ({ array }) => {
  // Find the maximum value in the array to scale the heights appropriately
  const maxValue = Math.max(...array);

  return (
    <div className="array-container">
      <div className="array-bar-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${(value / maxValue) * MAX_HEIGHT}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ArrayVisualizer;
