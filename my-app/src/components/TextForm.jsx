import React, {useState} from 'react'

export default function TextForm() {

  function handleUpClick(){

  }

  return (
    <div>
      <textarea name="form-control my3" id="floatingTextArea" placeholder='Leave a comment here' rows={8}></textarea>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert To Upper Case</button>
    </div>
  )
}
