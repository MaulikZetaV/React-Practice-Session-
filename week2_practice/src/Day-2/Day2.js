import React from 'react'
import ButtonCounter from './ButtonCounter'
import InputDisplay from './InputDisplay'
import ReusableFunction from './ReusableFunction'
import MultiHandler from './Practice/MultiHandler'
import UpperConverter from './Practice/UpperConverter'
import SameHandler from './Practice/SameHandler'
import OneTimeClickable from "./Practice/OneTimeClicked"

export default function Day2() {
  return (
    <div>
        <h3>Day-2 of React Learning</h3>
        <br/>
        <ButtonCounter/>
        <br/>
        <InputDisplay/>
        <br/>
        <ReusableFunction/>
        <br/>
        <MultiHandler/>
        <br/>
        <UpperConverter/>
        <br/>
        <SameHandler/>
        <br/>
        <OneTimeClickable/>
    </div>
  )
}
