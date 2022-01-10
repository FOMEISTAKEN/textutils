import React, {useState} from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line no-restricted-globals




export default function TextForm(props) {
  
    
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
const [text, setText] = useState('');
//text = "hello"; Wrong way to change state value
//setText("hello"); Right way to change state value
const handleUpClick = () =>{
    // console.log("Up Button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(". Converted to UPPERCASE", "success")
}
const handleDownlClick = () =>{
    // console.log("Up Button was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(". Converted to lowercase", "success")

}
const handleClearClick = () =>{
    // console.log("Up Button was clicked" + text);
    setText("");
    props.showAlert(". CLEARED!", "danger")

}
const handleOnChange = (event) =>{
    setText(event.target.value)
}
const handleCopy = () =>{
    var text = document.getElementById("myBox")
    text.focus();
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(". Copied to clipboard!", "success")

}
const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(", Extra spaces removed", "success")

}
    return (
     <>
      <div style={{color: props.mode === 'light'?'#042743':'white'}}>
            <div className="container mb-3 my-3" >
                <h1 className={`text-${props.mode === 'light'?'dark':'light'}`}>{props.heading}</h1>
                <label htmlFor="myBox" className="form-label"></label>
                <textarea value={text} onChange={handleOnChange} className={`form-control text-${props.mode === 'light'?'dark':'light'}`} style={{backgroundColor: props.mode === 'light'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick}  className="btn btn-primary mx-2">Convert To Uppercase</button>
            <button onClick={handleDownlClick}  className="btn btn-primary mx-2">Convert To lowercase</button>
            <button onClick={handleClearClick}  className="btn btn-primary mx-2">Clear All</button>
            <button onClick={handleCopy}  className="btn btn-primary mx-2">Copy Text</button>
            <button onClick={handleExtraSpaces}  className="btn btn-primary mx-2">Remove Extra spaces</button>
            <div className="container my-2">
                <h1 >Your text summary</h1>
                <p >{text.length>0 ? text.trim().split(" ").length : 0} word{`${text.length>1?'s':''}`}, {text.length} characters.</p>
                <p >The Time it would take an average person to read : {0.39 * text.split(" ").length } seconds</p>
                <h3 >
                    PREVIEW
                </h3>
                <p >{text.length>0?text:"Enter Something Above To Preview"}</p>

            </div>
            </div>
     </>
    )
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
TextForm.defaultProps = {
    heading: "Enter Your text Here"
}

