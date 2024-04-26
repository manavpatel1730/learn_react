

import { useState } from 'react';
import './App.css';
// import AboutTextUtiles from './components/AboutTextUtiles';

import Navbar from './components/Navbar';
// import PracticeForLowerCase from './components/PracticeForLowerCase';
import TextForms from './components/TextForms';
import Alert from './components/Alert';



function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert =(message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1200);

}

const toggleMode =()=>{
  if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("light mode has been enabled", "success")
    
  }
  else{
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      showAlert("dark mode has been enabled", "success")
     
  }
}
  return (
    <>
<Navbar title="TextUtiles" mode={mode} about="about TextUtiles" toggleMode={toggleMode}/>
<Alert alert={alert} />
{/* <Navbar /> */}
<div className="container my-3">
<TextForms heading="Enter your text" mode={mode}   showAlert={showAlert} />
{/* <AboutTextUtiles/> */}

{/* <PracticeForLowerCase heading="practice"/> */}
</div>
   </>
  );
}

export default App;
