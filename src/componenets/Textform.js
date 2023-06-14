import React, {useState} from 'react'


export default function Textform(props)
 {
  const handleUPclick = () =>{
    //console.log("Uppercase was clicked");//
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase!","sucesss");
  }
  const handleLOclick = () =>{
    let newText  = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lowercase!","sucesss");
  }
  const handleCAPclick = () =>{
    let newText  = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(0)).join(" ")
    setText(newText)
    props.showAlert("Converted to CapitalizeCase!","sucesss");
  }
  const handleCLRclick = () =>{
    let newText  = " " 
    setText(newText)
    props.showAlert("Text cleared!","sucesss");
  }
  const handleREVclick = () =>{
    let newText  =  text.split('').reverse().join('');
    setText(newText)
    props.showAlert("Text reversed!","sucesss");
   }
   const handleExtraspaceclick = () => {
  
    let newText = text.trim().replace(/\s+/g, " ");
    setText(newText)
    props.showAlert("Removed extra spaces !","sucesss");
  };
  

  
  
  
  const handleOnChange = (event) =>{
    //console.log("On change");//
    setText(event.target.value)
  }

  const [text,setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
  <div>
  <h1>{props.heading}</h1>
  <div className="mb-3">
    
    <textarea className="form-control" value={text}  onChange={handleOnChange}  style={{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
  </div>
  
  <button className="btn btn-primary mx-2" onClick={handleUPclick}>Convert to UPPERCASE</button>
  <button className="btn btn-primary mx-2" onClick={handleLOclick}>Convert to lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleCAPclick}>Capitailize text</button>
  <button className="btn btn-primary mx-2" onClick={handleCLRclick}>Clear text</button>
  <button className="btn btn-primary mx-2" onClick={handleREVclick}>Reverse of text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraspaceclick}>Remove Extra space</button>
 
  
  
  </div>
  </div>
  <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
  <h1>Your text summary</h1>
  <p>{text.trim().split(' ').length} words and {text.length} characters</p>
  <p>{0.008 * text.trim().split(' ').length} Mins to read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the textbox above to preview it here [*]^[*]" }</p>
  
  </div>
  </>
  
  )
  
}
