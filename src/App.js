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
  <Router>
  <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
    <TextForm name="Your Text" heading="Enter Your text"/>
            
          </Route>
        </Switch>
  </Router>


</div>
</div>
  );
}

export default App;
