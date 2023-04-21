import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from "./GifExpertApp";
import "./styles.css"
import { NavBar } from "./components/NavBar";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <main>
      <GifExpertApp />
    </main>
  </React.StrictMode>,
);
