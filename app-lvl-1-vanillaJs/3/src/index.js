import React from 'react';
import ReactDOM from 'react-dom';
import demo from './demo';
import App from './App';
import './styles/style.scss';
console.log(demo());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
