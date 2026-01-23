import React from 'react'
import { useState, useEffect } from 'react'


function UserListApp() {
const[userdata,setUserdata] = useState([]);
const[loading,setLoading] = useState(true);
const[error,setError] = useState("");
const [search, setSearch] = useState("");

useEffect(()=>{
    const userinfo = async() => {
        try{
            const res = await fetch("https://randomuser.me/api/?results=20");

            if(!res.ok){
                throw new Error("Failed to fetch user data");
            }

            const data = await res.json();
            setUserdata(data.results);

        }catch(err){
            setError(err.message);
        }finally{
            setLoading(false);
        }
    }

    userinfo();

},[])

const filterddata = userdata.filter(users=>(
    search === "" ||
    users.name.first.toLowerCase().includes(search.toLowerCase()) ||
    users.name.last.toLowerCase().includes(search.toLowerCase())
))

  return (
    <div>
        <h3>Mini Project</h3>
        <h4>User List App</h4>
        <ul>
            <li>Fetches user data from an API</li>
            <li>Displays users in a list/card format</li>
            <li>Implements search functionality</li>
            <li>Handles API errors gracefully</li>
        </ul>
        <br/>
        <h4><b>Welcome to User List App</b></h4>

        <br/>
        {loading && <p>Loading users...</p>}
        {error && <p style={{color:'red'}}>Error:{error}</p>}

        <br/>
        <p>For Search and Filter Functionality input below:-</p>
        <input
        type='text'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder='Enter Either first name or last name'
        />
        {filterddata.length===0?(
            <p>No User found</p>
        ):(
        <ul>
            {filterddata.map(users=>(
                <li key={users.login.uuid}>
                    <p><strong>Name:</strong>{users.name.first} {users.name.last}</p>
                    <p><strong>Email:</strong>{users.email}</p>
                    <p><strong>Country:</strong>{users.location.country}</p>
                    <img src={users.picture.thumbnail} alt="user" />

                </li>
            ))}
        </ul>
        )}
    </div>
  )
}

export default UserListApp;
