import React from 'react';
import './App.css';

function Legend() {
  return (
    <div className="legend">
      <div className="legend-item">
        <div className="color-box" style={{ backgroundColor: '#00008B' }}></div>
        <span>Variance: -4.67℃ or below</span>
      </div>
      <div className="legend-item">
        <div className="color-box" style={{ backgroundColor: '#ADD8E6' }}></div>
        <span>Variance: -4.67℃ to -3.66℃</span>
      </div>
      <div className="legend-item">
        <div className="color-box" style={{ backgroundColor: '#B0E0E6' }}></div>
        <span>Variance: -3.66℃ to -2.56℃</span>
      </div>
      <div className="legend-item">
        <div className="color-box" style={{ backgroundColor: '#BFEFFF' }}></div>
        <span>Variance: -2.56℃ to -1.46℃</span>
      </div>
      <div className="legend-item">
        <div className="color-box" style={{ backgroundColor: '#FFFF00' }}></div>
        <span>Variance: -1.46℃ to -0.36℃</span>
      </div>
      <div className="legend-item">
        <div className="color-box" style={{ backgroundColor: '#FFC100' }}></div>
        <span>Variance: -0.36℃ to 0.84℃</span>
      </div>
      <div className="legend-item">
        <div className="color-box" style={{ backgroundColor: '#FFA500' }}></div>
        <span>Variance: 0.84℃ to 1.94℃</span>
      </div>
      <div className="legend-item">
        <div className="color-box" style={{ backgroundColor: '#FF4500' }}></div>
        <span>Variance: 1.94℃ to 3.04℃</span>
      </div>
    </div>
  );
}

export default Legend;
