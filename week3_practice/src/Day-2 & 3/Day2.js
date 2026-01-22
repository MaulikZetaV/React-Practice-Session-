import React from 'react'
import FetchUserData from './FetchData'
import NewUser from './Practice/NewUser'
import NewPostStoreResponse from './Practice/FetchID'
import UpdatingData from './Practice/UpdatingData'
import DeletePost from './Practice/Delete'
import FetchDataAW from './Practice/FetchDataAW'
import CreateDataAW from './Practice/CreateDataAW'
import PutAW from './Practice/PutAW'
import DeleteAW from './Practice/DeleteAW'
import ErrorGet from './Practice/ErrorGet'
import ErrorPost from './Practice/ErrorPost'
import UsersWithLoading from './Loading'
import UsersWithError from './DataStoreError'
import ErrorPut from './Practice/ErrorPut'
import ErrorDelete from './Practice/ErrorDelete'
import UserCard from './UserCard'
import LoadingMessage from './Loading2'

export default function Day2() {
  return (
        <div>
        <h2><b>Day-2 and 3 of React Learning</b></h2>
        <br/>
        <FetchUserData/>
        <br/>
        <UsersWithLoading/>
        <br/>
        <UsersWithError/>
        <br/>
        <UserCard/>
        <br/>
        <LoadingMessage/>
        <br/>

        <br/>

        <br/>
        <h3>Self-Practice Session of Day-2 & 3</h3>
        <br/>   
        <NewUser/>
        <br/>
        <NewPostStoreResponse/>
        <br/>
        <UpdatingData/>
        <br/>
        <DeletePost/>
        <br/>
        <h4><b>async/await practice question</b></h4>
        <br/>
        <FetchDataAW/>
        <br/>
        <CreateDataAW/>
        <br/>
        <PutAW/>
        <br/>
        <DeleteAW/>
        <br/>
        <h4><b>Error Handling with async/await practice question</b></h4>
        <br/>
        <ErrorGet/>
        <br/>
        <ErrorPost/>
        <br/>
        <ErrorPut/>
        <br/>
        <ErrorDelete/>
        <br/>

        <br/>

    </div>

    
  )
}
