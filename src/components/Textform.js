import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState("")
    // text="hiiiiiiiiiiiiiiiiiiiiiiiii"
    // setText("Shiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    const upper = () =>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase","success")
    }
    const lower = () =>{
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to lowercase","success")
    }
    const clear = () =>{
        let newtext="";
        setText(newtext)
        props.showAlert("Cleared text","success")
    }
    const copy = () =>{
        let text=document.getElementById('Mybox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied text","success")
    }
    const Exspace = () =>{
        let newtext=text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert("Removed extra spaces","success")
    }
    const onchange = (event) =>{
        setText(event.target.value)
    }
  return (
    <>
    <div className='container' style={{color:props.mode ==='light'?'#2b3238':'white'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={onchange} id="Mybox" rows="8" style={{backgroundColor:props.mode ==='dark'?'#2b3238':'white',color:props.mode ==='light'?'#2b3238':'white'}} ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-2" onClick={upper} >Uppercase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={lower} >Lowercase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={clear} >Clear</button>
        <button className="btn btn-primary mx-1 my-2" onClick={copy} >Copy</button>
        <button className="btn btn-primary mx-1 my-2" onClick={Exspace}> Remove the Extra Spaces</button>

    <div className="container my-3" >
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length}words and {text.length}characters</p>
        <p>{0.008* text.split(" ").length} minutes read</p>
        <h2>PREVIEW</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
    </div>
    </>
  )
}
