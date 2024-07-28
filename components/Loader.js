import React from 'react';

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner-border">
        <div className="spinner"></div>
        <img src="/loder.png.webp" className="stationary" alt="Loading" />
      </div>
      <style jsx>{`
        .loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.8);
          z-index: 9999;
        }
        .spinner-border {
          position: relative;
          width: 120px; /* Adjust the size as needed */
          height: 120px; /* Adjust the size as needed */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .spinner {
          position: absolute;
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-left-color: #FF2020;
          border-radius: 50%;
          width: 120px; /* Adjust the size as needed */
          height: 120px; /* Adjust the size as needed */
          animation: spin 1s linear infinite;
        }
        .stationary {
          position: absolute;
          width: 60px; /* Adjust the size as needed */
          height: 60px; /* Adjust the size as needed */
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;