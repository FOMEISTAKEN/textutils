import React, {useState} from 'react'
import PropTypes from 'prop-types'




export default function TextForm(props) {
const [text, setText] = useState('');
//text = "hello"; Wrong way to change state value
//setText("hello"); Right way to change state value
const handleUpClick = () =>{
    // console.log("Up Button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
}
const handleDownlClick = () =>{
    // console.log("Up Button was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
}
const handleClearlClick = () =>{
    // console.log("Up Button was clicked" + text);
    setText("");
}
const handleOnChange = (event) =>{
    setText(event.target.value)
}
const handletextExtract =()=>{
    const fome = /[0-9/A-Z/a-z/ /]/g;

    const letters = text.match(fome);
    const res1 = letters.join('');
    setText(res1)
    };
    return (
     <>
      
            <div className="container mb-3 my-3">
                <h1>{props.heading}</h1>
                <label htmlFor="myBox" className="form-label"></label>
                <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick}  className="btn btn-primary mx-2">Convert To Uppercase</button>
            <button onClick={handleDownlClick}  className="btn btn-primary mx-2">Convert To lowercase</button>
            <button onClick={handleClearlClick}  className="btn btn-primary mx-2">Clear All</button>
            <button onClick={handletextExtract}  className="btn btn-primary mx-2">Remove ., etc</button>
            <div className="container my-2">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters.</p>
                <p>The Time it would take an average person to read : {0.39 * text.split(" ").length } seconds</p>
                <h3>
                    PREVIEW
                </h3>
                <p>{text}</p>

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

