import React from 'react'


const infos = ["Maulik Thakur",22,"B.Tech","Pune"];
const user = [
    {id:1,name:"Chaitanya"},
    {id:2,name:"Rashmi"},
    {id:3,name:"Aniket"}
];

export default function Map() {
  return (
    <div>
        <h3><b>Array rendering as a List using map</b></h3>
        <ul>
            {infos.map(info=>(
                <li key ={info}>{info}</li>
            ))}
        </ul>
        <br></br>

        <h3><b>Object rendering as a List using map</b></h3>
        <ul>
            {user.map(user =>(
                <li key = {user.id}>{user.name}</li>
            ))}
        </ul>
        <br></br>

        
        

    </div>
  )
}
