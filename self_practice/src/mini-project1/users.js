import React from 'react'
import { useNavigate } from 'react-router-dom'


function Users() {
    const navigate = useNavigate();

    const handlerNavigate =(id)=>{
        navigate(`/users/${id}`)
    }
  return (
    <div>
        <h3>Users Page</h3>
        <p>For accessing user use below buttons</p>
        <button onClick={()=>handlerNavigate(1)}>User 1</button><br/>
        <button onClick={()=>handlerNavigate(2)}>User 2</button><br/>
        <button onClick={()=>handlerNavigate(3)}>User 3</button><br/>
        <button onClick={()=>handlerNavigate(4)}>User 4</button><br/>

    </div>
  )
}

export default Users