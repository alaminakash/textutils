import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase Was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let lowText = text.toLowerCase();
        setText(lowText);
    }

    const handleOnChange = (event) => {
        // console.log("Something has Changed.");
        setText(event.target.value);
    }
    const[text, setText] = useState("");
  return (
    <>
    <div className="container">
        <div className="mb-3 my-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1 style={{color:props.mode === 'light'?'black':'white'}}>{props.heading}</h1></label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'?'white':'Gray',color:props.mode === 'light'?'black':'white'}}></textarea>
            <button className="btn btn-primary my-3" onClick={handleUpClick}>Covert to UpperCase.</button>
            <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>Covert to UpperCase.</button>
        </div>
    </div>
    <div className="container">
        <h1 style={{color:props.mode === 'light'?'black':'white'}}>Your Text Summery.</h1>
        <p style={{color:props.mode === 'light'?'black':'white'}}>{text.split(" ").length} words and {text.length} Cheracters.</p>
        <p style={{color:props.mode === 'light'?'black':'white'}}>{0.008 * text.split(" ").length} minutes to Read.</p>
        <h2 style={{color:props.mode === 'light'?'black':'white'}}>Preview</h2>
        <p style={{color:props.mode === 'light'?'black':'white'}}>{text}</p>
    </div>
    </>
  )
}

