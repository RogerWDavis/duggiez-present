import React from "react";
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar.js';
import CoolNavBar from './components/login.js';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <CoolNavBar name="Bob" />
    </div>
  );
}

export default App;
