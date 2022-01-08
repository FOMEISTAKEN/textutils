import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
<>
    <Navbar title="RJC" aboutText="About RJC"/>
<div className="container">
    <TextForm name="Your Text" heading="Enter Your text"/>
</div>
</>
  );
}

export default App;
