import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
const [user, setUser] = useState('')
const [password, setPassword] = useState('')
const navigate=useNavigate()

const handleSubmit=(e)=>{
e.preventDefault()

if(user==="test" && password=== "test"){
  localStorage.setItem("isAuthenticated",true)
  navigate('/dashboard')
}


}

  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type='text' onChange={(e)=> setUser(e.target.value)} />
        <input type='password' onChange={(e)=> setPassword(e.target.value)} />
        <input type='submit' value='Login'/>

      </form>
    </div>
  )
}
