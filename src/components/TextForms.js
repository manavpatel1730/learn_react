// import { useState } from "react"
import React, {useState} from 'react'


export default function TextForms(props) {
    const [text, setText] = useState('enter text here');
    console.log(useState("enter text here"));
    const handleUpClick = ()=>{
   
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{

        setText(event.target.value);
    }
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCpClick =()=>{
        let newText = text.charAt(0).toUpperCase().split(". ")+text.slice(1);
        setText(newText);
    }
  return (
    <>
<div className="container">

<div className="mb-3">
  <label htmlFor="textArea" className="form-label">{props.heading} </label>
  <textarea className="form-control" value={text} id="textArea" rows="8" onChange={handleOnChange}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>
   convert to Uppercase
</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>
   convert to lowercase
</button>
<button className="btn btn-primary mx-2" onClick={handleCpClick}>
   convert to capitalize
</button>
</div>
<div className="container my-3">
<h1>your text summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p> 
<p>{0.008 * text.split(" ").length} Minutes to read this paragraph</p> 

<h2 className='container'>Preview</h2>
<div className="card">
  <div className="card-body">
<p>{text}</p>
</div>
</div>

</div>
    </>
  )
}
