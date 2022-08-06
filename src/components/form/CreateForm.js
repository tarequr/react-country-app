import React, { useState } from 'react'

import style from './CreateForm.module.css';

function CreateForm(props) {

  const [user, setUser] = useState({ name: "", email: ""});

  const {name, email} = user;

  const handleChange = (event) => {
    const name =  event.target.name;

    setUser( (oldUser) => {
      return {...oldUser, [name]: event.target.value}
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(user);
    props.onAddUser(user);  //data collected from home.js

    setUser({ name: "", email: ""});
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
            <label htmlFor="title">Name :</label>
            <input type="text" name='name' id='name' value={name} onChange={handleChange} required/>
        </div>
        <div className={style["form-field"]}>
            <label htmlFor="email">Email :</label>
            <input type="email" name='email' id='email' value={email} onChange={handleChange} required/>
        </div>
        <button type='submit' className='btn'>Save</button>
    </form>
  )
}

export default CreateForm