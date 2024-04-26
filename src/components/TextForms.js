// import { useState } from "react"
import React, {useState} from 'react'


export default function TextForms(props) {
    const [text, setText] = useState('');
    console.log(useState("enter text here"));
    const handleUpClick = ()=>{
   
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success")
    }
    const handleOnChange = (event)=>{

        setText(event.target.value);
    }
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclearClick =()=>{
      let newText = ''
      setText(newText);
  }
  const handleextraspaceClick =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleCopy =()=>{
    let newText = text;
    navigator.clipboard.writeText(newText);
    if(navigator.clipboard.writeText(newText)){
      alert('copied to clipboard');
    }
  }
  const handleFirstLetter =()=>{
    let newText =  text.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    setText(newText);
  }
    const handleCpClick =()=>{
        let newText = text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText);
    }
const handlespeakmessage =()=>{
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

  return (
    <>
<div className="container">

<div className="mb-3">
  <h1 htmlFor="textArea" className={`form-label text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.heading} </h1>
  <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'light' ? 'grey' : 'black',color:props.mode === 'light' ? 'black' : 'white'}} id="textArea" rows="8" onChange={handleOnChange}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>
to Uppercase
</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>
 to lowercase
</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>
    copy text
</button>
<button className="btn btn-primary mx-2" onClick={handleFirstLetter}>first letter capitalize</button>
<button className="btn btn-primary mx-2" onClick={handleCpClick}>
   to capitalize
</button>
<button className="btn btn-primary mx-2" onClick={handleextraspaceClick}>
   remove extra space
</button>
<button className="btn btn-secondary mx-2" onClick={handlespeakmessage}>
   speak message
</button>
<button className="btn btn-danger mx-2" onClick={handleclearClick}>
   Clear Text
</button>
</div>
<div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
<h1>your text summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p> 
<p>{0.008 * text.split(" ").length} Minutes to read this paragraph</p> 

<h2 className='container'>Preview</h2>
<div className="card bg-dark text-light">
  <div className="card-body">
<p>{text.length>0 ? text : "enter something in the textbox above to preview here" }</p>
</div>
</div>

</div>
    </>
  )
}
