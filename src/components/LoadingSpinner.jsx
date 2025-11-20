import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-overlay">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <h2>BERRY</h2>
        <p>Загружаем сладкие моменты...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;