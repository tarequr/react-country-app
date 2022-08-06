import React from 'react'

import UserInformation from './UserInformation'
import style from './style/user.module.css'

function User(props) {
  return (
    <section className={style.user}>
        {
          props.userInfos.map( (userInfo) => (
            <UserInformation key={userInfo.id} id={userInfo.id} allUser={userInfo.users} onRemoveUserInfo={props.onRemoveUser}/>
          ))
        }
    </section>
  )
}

export default User