import React, {useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick =()=>{
    let newText=text.toUpperCase();
    setText(newText)
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleClearClick=()=>{
        let newText=''
        setText(newText)
    }

    const handleCopy=()=>{
      var text= document.getElementById("my box")
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
    }

    const handleExtra=()=>{
     let newText=text.split (/[ ]+/)
     setText(newText.join(""))
    }

    const handleOnChange= (event)=>{
    console.log("On change")
    setText(event.target.value)
    }
    const[text, setText]= useState('')
  return (
    <>
    <div className="container" style ={{color:props.mode==='dark'?'white ':'#5f30ab'}}>
        <h1>{props.heading}</h1>
              <div className="mb-3">
                <textarea className="form-control" style ={{backgroundColor:props.mode==='dark'?'#5f30ab':'white',color:props.mode==='dark'?'white':'#5f30ab'}} value={text} onChange ={handleOnChange} id="my box" rows="8"></textarea>
        </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2"  onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtra}>Remove extra spaces</button>
    </div>
    <div className="afterTextBox my-2" style ={{color:props.mode==='dark'?'white ':'#5f30ab'}}>
        <h1>  Your text summary </h1>
        <p> {text.split(" ").length} words and no of {text.length} characters</p>
        <p> {0.008*text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something here to preview"}</p>
    </div>
    </>
  ) 
}
