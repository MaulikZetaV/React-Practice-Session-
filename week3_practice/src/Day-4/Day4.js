import React from 'react'
import CountryDashBoard from './CountryDashboard'
import SingleSearch from './Practice/SingleSearch'
import MultipleSearch from './Practice/SingleMultiple'
import SearchCondtion from './Practice/SearchCondtion'
import NumberSearch from './Practice/NumberSearch'
import FilterOnlyButton from './Practice/FilterOnly'
import UserSearchTask from './ZetaVTask'

export default function Day4() {
  return (
        <div>
        <h3>Day-4 of React Learning</h3>
        <h3>Self-Mini Project</h3>
        <CountryDashBoard/>
        
        <br/>
        <br/>
        <h3>Task</h3>
        
        <UserSearchTask/>
        <br/>
        <br/>

        <h3>Self-Practice Session of Day-4</h3>
        <br/>   
        <SingleSearch/>
        <br/>
        <MultipleSearch/>
        <br/>
        <SearchCondtion/>
        <br/>
        <NumberSearch/>
        <br/>
        <FilterOnlyButton/>
        <br/>
       
    </div>

    
  )
}
