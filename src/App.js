import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';





function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })                

  
  setTimeout(() => {
    setAlert(null);
  }, 3000);
}

  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor= "#042743"
      showAlert(". Dark mode has been enabled.", "success")
      document.title = "RJC - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= "white"
      showAlert(". Light mode has been enabled.", "success")
      document.title = "RJC - Light Mode"

    }
  }

  return (
    <>   
<div>
  <Router>
    <Navbar title="RJC" aboutText="About RJC" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
      <Routes>
        <Route path="/about" element={<About/> }/>
        <Route path="/" element={ <TextForm showAlert={showAlert} name="Your Text" heading="Enter Your text" mode={mode}/>}/>

      </Routes>


    
  </div> 
  </Router> 
</div>

</>

  );
}

export default App;
