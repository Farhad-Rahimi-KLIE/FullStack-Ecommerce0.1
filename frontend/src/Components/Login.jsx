import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const Login = () => {

  const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

 const LoginInkaro = ()=>{
    axios.post("http://localhost:3000/login", {email, password}).then(result => {
        console.log(result)
        if (result.data.status === 200) {
            localStorage.setItem('users', JSON.stringify(result))
            navigate("/")
        }
    }).catch(err => console.log(err))
 }

 useEffect(()=>{
    let auth = localStorage.getItem('users')
    if (auth) {
        navigate('/')
    }
 })

  return (
    <>
    <div className='login'>
            <h1>Login</h1>
            <input type="text" className="inputBox" placeholder='Enter Email'
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
             />
            <input type="password" className="inputBox" placeholder='Enter Password'
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
             />
            <button className="appButton" type="button" onClick={LoginInkaro}>Login</button>
        </div>
    </>
  )
}

export default Login
