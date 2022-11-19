import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import Main from './components/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
