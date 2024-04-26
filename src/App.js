

import { useState } from 'react';
import './App.css';
import AboutTextUtiles from './components/AboutTextUtiles';

import Navbar from './components/Navbar';
// import PracticeForLowerCase from './components/PracticeForLowerCase';
import TextForms from './components/TextForms';



function App() {
const [mode, setMode] = useState('dark');
const toggleMode =()=>{
  if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
    
  }
  else{
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
     
  }
}
  return (
    <>
<Navbar title="TextUtiles" mode={mode} about="about TextUtiles" toggleMode={toggleMode}/>
{/* <Navbar /> */}
<div className="container my-3">
<TextForms heading="Enter your text" mode={mode} />
<AboutTextUtiles/>

{/* <PracticeForLowerCase heading="practice"/> */}
</div>
   </>
  );
}

export default App;
