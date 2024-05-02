import React from 'react';
import ReactDOM from 'react-dom'; // Import createRoot from 'react-dom'
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render( // Use createRoot instead of ReactDOM.render
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
