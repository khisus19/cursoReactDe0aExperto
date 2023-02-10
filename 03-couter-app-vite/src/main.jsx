import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from "./FirstApp";
import { App } from './HelloWorldApp'


ReactDOM.createRoot( document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <FirstApp />
    
  </React.StrictMode>
)