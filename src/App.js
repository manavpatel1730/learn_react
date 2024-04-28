import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,

  Route,

  Routes
} from "react-router-dom";

import AboutTextUtiles from './components/AboutTextUtiles';
import Navbar from './components/Navbar';
// import PracticeForLowerCase from './components/PracticeForLowerCase';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
import Footer from './components/Footer';

function App() {
const [mode, setMode] = useState('light');
// const [redGreen, setredGreen] = useState('danger');
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
// const toggleRedGreen =()=>{
//   if(redGreen === 'success'){
//     setredGreen('danger')
//       document.body.style.backgroundColor = 'red'
//       document.body.style.color = 'green'
//       showAlert("red mode has been enabled", "success")
    
//   }
//   else{
//     setredGreen('success')
//       document.body.style.backgroundColor = 'green'
//       document.body.style.color = 'red'
//       showAlert("Green mode has been enabled", "success")
     
//   }
// }
const toggleMode =()=>{
  if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("light mode has been enabled", "success")
      document.title = "TextUtiles-lightMode"
  }
  else{
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      showAlert("dark mode has been enabled", "success")
      document.title = "TextUtiles-darkMode"
  }
}
  return (
    <>
    <Router>
<Navbar title="textUtiles" mode={mode}   about="About Me"  toggleMode={toggleMode}/>
<Alert alert={alert} />
{/* <Navbar /> */}
<div className="container my-3">
{/* <Routes>
<Routes>
  <Route path="/about" element={<AboutTextUtiles />} />
  <Route path="/" element={<TextForms heading="Enter your text" mode={mode} showAlert={showAlert} />} />

</Routes> */}
   <Routes>
        <Route exact path="/about" element={<AboutTextUtiles  setMode={setMode}  toggleMode={toggleMode} />} />
        <Route exact path="/" element={<TextForms mode={mode}   showAlert={showAlert}  />}  />
      </Routes>

{/* <Route  path="/about">
  <AboutTextUtiles/>
</Route>
<Route  path="/">
<TextForms heading="Enter your text" mode={mode}   showAlert={showAlert} />
</Route> */}
{/* <AboutTextUtiles/> */}

{/* <PracticeForLowerCase heading="practice"/> */}
{/* </Routes> */}
</div>
<Footer/>
</Router>
   </>
  );
}

export default App;
