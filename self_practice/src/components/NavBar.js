import React from 'react'
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div>
        <Link to = "/">Home</Link><br/>
        <Link to = "/homes">Mini Project 1(Dynamic Router)</Link><br/>
        <Link to ="/about">About</Link>
        
    </div>
  )
}

export default NavBar