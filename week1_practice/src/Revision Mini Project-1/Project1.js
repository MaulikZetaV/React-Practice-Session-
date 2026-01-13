import React from 'react'
import P1Compo from './P1Compo'
import dummydata from './dummydata'
import worker from './dummydata'


export default function Project1() {
    const countEmployee = worker.length;
  return (
    <>
    <h3><b>Employee Management Panel</b></h3>
    {dummydata.map((p1info)=>(
        <P1Compo
        key ={p1info.id}
        name={p1info.name}
        shift={p1info.shift}
        />
    ))}
    <br/>
    <p>Total Count of Employee is {countEmployee}.</p>
    </>
  )
}
