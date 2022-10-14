import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './common.scss'

import Routess from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routess />
  </React.StrictMode>
);

