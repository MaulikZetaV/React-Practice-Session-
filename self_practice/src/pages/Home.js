import React from 'react'
import {useNavigate} from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleAbout = () =>{
    navigate("/about");
  }
  return (
    <div>
        <h2>Welcome to Home Page of React Routing Practice</h2>

        <button onClick={()=>navigate("/user")}>Go to User</button><br/>
        
        <button onClick={handleAbout}>Go to About</button>
        
    </div>
  )
}

export default Home