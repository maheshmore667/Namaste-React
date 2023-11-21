import React from "react";
import  ReactDOM  from "react-dom/client";
import logo from "./logo.png"

const SearchBarComponent = () =>{
  return (
    <input type="text" style={{"padding":"5px", "borderRadius" : "8px", "border" : "2px solid black"}} placeholder="search text here" />
  )
}
const HeadingComponent = ()=>{
  return(
    <div className="container-fluid" style={{ "border" : "2px solid red", "display" : "flex", "borderRadius" : "8px"}}>
      <div id="logoSection"><img style={{"height": "50px", "width":"50px"}} src={logo}/></div>
      <div id="searchSection" style={{"margin" : "auto", "marginTop" : "5px", "marginBottom" : "5px"}}><SearchBarComponent /></div>
      <div id="logoSection" style={{"display":"flex", "flexWrap":"wrap","alignItems":"center"}}><i className="glyphicon glyphicon-user" style={{"fontSize" : "20px"}}></i></div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent /> );
