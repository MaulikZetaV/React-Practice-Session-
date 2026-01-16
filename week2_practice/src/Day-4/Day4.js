import React from 'react'
import RegistrationForm from './RegistrationForm'
import BasicForm from './Practice/BasicForm'
import Password from './Practice/PasswordLength'
import DropDown from './Practice/DropDown'
import CheckBox from './Practice/CheckBox'
import RadioButton from './Practice/RadioButton'
import RequiredValidation from './Practice/RequiredValidation1'
import UserForm from './Practice/UserForm'



export default function Day4() {
  return (
    <div>
        <h3>Day-4 Of React Learning</h3>
        <br/>
        <RegistrationForm/>
        <br/>
        <br/>
        <br/>
        <BasicForm/>
        <br/>
        <Password/>
        <br/>
        <DropDown/>
        <br/>
        <CheckBox/>
        <br/>
        <RadioButton/>
        <br/>
        <RequiredValidation/>
        <br/>
        <UserForm/>
        <br/>
        
        <br/>

    </div>
  )
}
