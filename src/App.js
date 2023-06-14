
import React, { useState } from 'react';
import './App.css';
import Aboutus from './componenets/Aboutus';
import Navbar from './componenets/Navbar';
import Textform from './componenets/Textform';
import Alert from './componenets/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

function App() {
  const[mode,setMode ] = useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({msg: message,
              type: type 

  })
  setTimeout(()=> {
   setAlert(null);
  },1000)
}
  const toggleMode = () =>{
    if(mode === 'dark'){
    setMode("light");
    document.body.style.backgroundColor= 'white';
    showAlert("Light mode has been updated!", "success")
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor= 'grey';
      showAlert("Dark mode has been enabled!", "success")
    }
  }
  
  return (
  <>
<Router>
<Navbar title="TextUtils" Home="Home" mode={mode} toggleMode={toggleMode} Aboutus="Aboutus"  />
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
         
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter text to analyse " mode={mode}/>}/>
          
          
          <Route path="/about" element={<Aboutus/>}/>
          
          
          
  </Routes>
  </div>
  </Router>
  </>
  );
}


export default App;
