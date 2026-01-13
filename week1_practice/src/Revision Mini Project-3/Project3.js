import React from 'react'
import P2Compo from './P2Compo'
import DummyData2 from './DummyData2'


export default function Project3() {
  return (
    <>
    <h3><b>User Dashboard Panel</b></h3>
    {DummyData2.map((uinfo)=>(
        <P2Compo
        key={uinfo.id}
        name={uinfo.name}
        role={uinfo.role}
        status={uinfo.userStatus}
        />
    ))}
    
    </>
  )
}
