import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
<>
    <Navbar title="RJC" aboutText="About RJC"/>
<div className="container">
    {/* <TextForm name="Your Text" heading="Enter Your text"/> */}
    <About/>
</div>
</>
  );
}

export default App;
