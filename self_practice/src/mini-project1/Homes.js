import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Users from './users'
import UserInfo from './userInfo'

function Homes() {
    
  return (
    <div>
        <h2>Welcome to HOME PAGE (MINI-Project)</h2>
        <p>FOR accessing User use below button</p>
        <button onClick={()=>

        <Routes>
           <Route path="/user" element = {<Users/>} />
           <Route path="/user/:id" element = {<UserInfo/>} />
        </Routes>
}>User
        </button>
    </div>
  )
}

export default Homes