import React from 'react'
import SearchAPI from './Practice/SearchAPIData'
import MultiInput from './Practice/CombineSearch'
import PriceFilterSearch from './Practice/FilterByPrice'
import UserListApp from './UserListApp'

export default function Day5() {
  return (
        <div>
        <h3>Day-5 React Learning</h3>
        <br/>
        <UserListApp/>
        <br/>

       
        <h3>Self-Practice Session of Day-5</h3>
        <br/>   
        <SearchAPI/>
        <br/>
        <MultiInput/>
        <br/>
        <PriceFilterSearch/>
        <br/>

    </div>

    
  )
}
