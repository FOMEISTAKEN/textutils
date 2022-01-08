import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
<div>
    <Navbar title="RJC" aboutText="About RJC"/>
<div className="container">
    <TextForm name="Your Text" heading="Enter Your text"/>
    <About/>

</div>
</div>
  );
}

export default App;
