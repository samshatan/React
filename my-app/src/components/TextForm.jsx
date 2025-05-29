import React, {use, useState} from 'react';

export default function TextForm(props) {

  function handleUpClick(){
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) =>{
    setText(event.target.value);
  }

  function handleRemoveClick(){
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
  }

  function handleClearClick(){
    setText("");
  }

  function copyText(){

  }

  const [text, setText] = useState('Enter Text Here2');

  return (
    <>
    <div className='container'>
      <center><h1>{props.title}</h1></center>
      <textarea name="form-control my3" id="floatingTextArea" placeholder='Leave a comment here' rows={8} value={text} onChange={handleOnChange}></textarea>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert To Upper Case</button>
      <button className="btn btn-primary" onClick={handleLowClick}>Convert To Lower Case</button>
      <button className="btn btn-primary" onClick={handleRemoveClick}>Remove Extra Spaces</button>
      <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary" onClick={copyText}>Copy Text</button>
    </div>
    <div>
      <h2>Your Text Summary</h2>
      <p>{text.split("").length} words and {text.length}</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something"}</p>
    </div>
    </>
  )
}
