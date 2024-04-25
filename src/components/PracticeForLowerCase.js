import React from 'react'
import { useState } from 'react'

export default function PracticeForLowerCase(props) {
    const [text, setText] = useState('enter text here');
    const clickToLower =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handlechangeToLower =(event)=>{
 setText(event.target.value);
    }
  
  return (
    <>
<h1>{props.heading}</h1>
      <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" onChange={handlechangeToLower}></textarea>
</div>
<button className="btn btn-primary" onClick={clickToLower}>
    convert to LowerCase
</button>
    </>
  )
}
