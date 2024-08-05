import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const SignUpKaro = ()=>{
        if (!name || !email || !password) {
            alert("No Field Empty pleaase fill it")
        }else{
            axios.post("http://localhost:3000/register", {name, email, password}).then(result => console.log(result)).catch(er => console.log)
            navigate("/login")
        }
    
      }
    
    //   useEffect(()=>{
    //     let auth = localStorage.getItem('users');
    //     if (auth) {
    //         navigate('/')
    //     }
    //   })

  return (
    <>
    <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="Enter Name"
            onChange={(e)=> setName(e.target.value)}
            value={name}
            />
            <input className="inputBox" type="text" placeholder="Enter Email"
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            />
            <input className="inputBox" type="password" placeholder="Enter password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
            />
            <button className="appButton" type="button" onClick={SignUpKaro}>Sign Up</button>
        </div>
    </>
  )
}

export default Signup
