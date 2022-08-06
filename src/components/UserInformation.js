import React from 'react'
import User from './User';
import style from './style/userInformation.module.css'

function UserInformation(props) {
    const {name,email} = props.allUser;
    const {id} = props;

    const handleDelete = (id) => {
        props.onRemoveUserInfo(id);
    }

  return (
    <article className={style.userInfo}>
        <div>
            <p><b>ID : </b>{id}</p>
            <p><b>Name : </b>{name}</p>
            <p><b>Email : </b>{email}</p>
        </div>
        <div>
            <button className={style.btn} onClick={ () => { handleDelete(id); }}>
                <i className='fa fa-trash fa-2x'></i>
            </button>
        </div>
    </article>
  )
}

export default UserInformation