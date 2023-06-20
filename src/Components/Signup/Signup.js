import React, { useState,useContext } from 'react';
import {useNavigate} from 'react-router-dom';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';

export default function Signup() {
  const navigate = useNavigate()
  const [username,setUsername] =useState('');
  const [email,setEmail] = useState('');
  const [phonenumber,setPhonenumber]=useState('');
  const [password,setPassword] = useState('');
  const usernameOnchange=(e)=>{
    setUsername(e.target.value) 

  }
  const {firebase} = useContext(FirebaseContext)
  const handleSubmit =(e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({dispayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phonenumber:phonenumber
        }).then(()=>{
          navigate('/login')
        })
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={usernameOnchange}
            id="uname"
            name="uname"
            defaultValue="John"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="email"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phonenumber}
            onChange={(e)=>setPhonenumber(e.target.value)}
            id="phone"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="password"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
