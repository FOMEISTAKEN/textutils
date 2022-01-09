import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';



function App() {

  const [mode, setMode] = useState('light')
  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor= "#042743"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= "white"

    }
  }
  return (
    <>   
<div>
    <Navbar title="RJC" aboutText="About RJC" mode={mode} toggleMode={toggleMode}/>
    <Alert alert="This is alert"/>
    <div className="container">

  <TextForm name="Your Text" heading="Enter Your text" mode={mode}/>

 
    {/* <About/> */}
    
  </div>  
</div>

</>

  );
}

export default App;
