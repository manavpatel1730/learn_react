// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import PracticeForLowerCase from './components/PracticeForLowerCase';
import TextForms from './components/TextForms';


function App() {
  return (
    <>
<Navbar title="TextUtiles" about="about TextUtiles"/>
{/* <Navbar /> */}
<div className="container my-3">
<TextForms heading="Enter your text"/>

{/* <PracticeForLowerCase heading="practice"/> */}
</div>
   </>
  );
}

export default App;
