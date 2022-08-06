import React, { useState } from 'react'

import {v4 as uuidv4} from "uuid"

import User from './User'
import style from './style/home.module.css'
import CreateForm from './form/CreateForm'


function Home() {

    const [users, setUser] = useState([]);

    const handleChildToParent = (users) => {
        setUser( (previousUsers) => {
            return [...previousUsers, { id: uuidv4(), users}]  //data collected from child (CreateForm)
        })
    }


    const handleRemoveUser = (id) => {
        
        setUser( () => {
            const filteredUsers = users.filter( (user) => user.id != id);
            return filteredUsers;
        })
    }

  return (
    <div className={style.container}>
        <h1 style={{ color: "white"}}>User Information:</h1>
        <CreateForm onAddUser={handleChildToParent} />
        <User userInfos={users} onRemoveUser={handleRemoveUser}/>
    </div>
  )
}

export default Home