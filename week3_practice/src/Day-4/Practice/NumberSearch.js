import React, { useState } from "react";

function NumberSearch() {

  const usersData = [
    { id: 1, name: "Aarav", email: "aarav@gmail.com", role: "Admin", age: 28 },
    { id: 2, name: "Neha", email: "neha@gmail.com", role: "User", age: 22 },
    { id: 3, name: "Rohan", email: "rohan@gmail.com", role: "Manager", age: 35 },
    { id: 4, name: "Priya", email: "priya@gmail.com", role: "User", age: 26 },
    { id: 5, name: "Kunal", email: "kunal@gmail.com", role: "Admin", age: 40 }
  ];

  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");
  
   const handler = usersData
   .filter(user=>
    user.name.toLowerCase().includes(search.toLowerCase()) &&
    user.age.toString().includes(search1)
   );


   return (
    <div>
      <h4>Task 4:Number Filter + Search (Combined)</h4>
      <input
        type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Enter name"
        />
       <br/>
       <input
       type="text"
       value={search1}
       onChange={(e)=>setSearch1(e.target.value)}
       placeholder="Enter age"
       />

     
        {handler.length===0?(
            <p>No user found</p>
        ):(
            <ul>
        {handler.map(user=>(
            <li key={user.id}>{user.name}</li>
        ))}
       </ul>
        )}
       
       


     
    </div>
  );
}

export default NumberSearch;
