import React from 'react'
import {useState,useEffect } from 'react'


function FetchDataAW() {
const[infos,setInfos] = useState([]);


useEffect(()=>{
    
    const FetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setInfos(data);   
    };
    FetchData();
},[]);

  return (
    <div>
    <h4>Task 1: Async/await in Fetch</h4>
    

   
    <ul>
        {infos.map(info=>(
            <li key={info.id}>{info.name}</li>
        ))}
    </ul>
    
    </div>
  );
}

export default FetchDataAW;
