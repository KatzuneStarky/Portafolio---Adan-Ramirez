import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import RoutesLinks from './Routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesLinks />
    <App />
  </React.StrictMode>
);
