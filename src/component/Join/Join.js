import React, { useState } from 'react'
import "./Join.css"
import logo from "../../images/logo.png"
import {Link} from "react-router-dom"

let user;

function Join() {

  const [name,setName]=useState("")
  const sendUser = ()=>{
    user = document.getElementById("joinInput").value;
    document.getElementById("joinInput").value=""
  }
  return (
    <div className='JoinPage'>
      <div className='JoinContainer'>
        <img src={logo} alt="logo"/>
        <h1>C CHAT</h1>
        <input type="text" onChange={(event)=>setName(event.target.value)} id="joinInput" placeholder='Enter Your Name'/>
        <Link onClick={(event)=> !name ?event.preventDefault():null} to="/chat"><button className='joinbtn' onClick={sendUser}>Login In</button></Link> 
      </div>
    </div>
  )
}

export default Join
export {user}