import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirstApp } from "./FirstApp";
// import { App } from './HelloWorldApp'
import './styles.css'

ReactDOM.createRoot( document.getElementById("root")).render(
  <React.StrictMode>

    <FirstApp title={ "Soy string" } />
    
  </React.StrictMode>
)