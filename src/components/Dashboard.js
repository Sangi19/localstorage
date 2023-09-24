import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {

  const navigate=useNavigate()

 useEffect(() => {
  
  if(!!!localStorage.getItem('isAuthenticated')){
    navigate('/login')
  }
 }, [navigate])
 

  return (
    <div>Dashboard</div>
  )
}
