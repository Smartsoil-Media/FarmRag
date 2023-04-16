import React from 'react'
import { useState } from 'react';
import { RegisterAPI } from '../api/AuthAPI'
import '../Sass/LoginComponent.scss';
import '/src/index.css'


export default function LoginComponent() {
  const [credentails, setCredentials] = useState({})
  const login = () => {
    try{
      let res = RegisterAPI(credentails.email, credentails.password)
    } catch(err) {
    }

  
  }
  return (
    <div className="login-wrapper-inner">
      <div class="bg-image"></div>
    <h1 className="heading">Sign in</h1>
    <p className="sub-heading">Social Area For Regenerative Farmers</p>

    <div className="auth-inputs">
      <input
        onChange={(event) =>
          setCredentials({ ...credentails, email: event.target.value })
        }
        type="email"
        className="common-input"
        placeholder="Email or Phone"
      />
      <input
        onChange={(event) =>
          setCredentials({ ...credentails, password: event.target.value })
        }
        type="password"
        className="common-input"
        placeholder="Password"
      />
    </div>
    <button onClick={login} className="login-btn">
      Sign in
    </button>
  </div>
  )
}
