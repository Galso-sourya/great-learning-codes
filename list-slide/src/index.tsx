import React from 'react';
import ReactDOM from 'react-dom/client';
import SlideDeck from './SlideDeck';
import slides from './slides-data';
import './SlideDeck-demo.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SlideDeck slides={slides}/>
  </React.StrictMode>
);
