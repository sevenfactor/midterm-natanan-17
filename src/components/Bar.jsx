import React from 'react'
import { NavLink } from 'react-router'


function Bar() {
  return (
    <div className="bg-teal-800 h-12 flex items-center justify-center gap-8">
            <NavLink to="/" className="font-bold text-white hover:text-amber-500">Lonin</NavLink>
            <NavLink to="/Register" className="font-bold text-white hover:text-amber-500" >Register</NavLink>
            <NavLink to="/Todolist" className="font-bold text-white hover:text-amber-500">Todolist</NavLink> 
            </div>      
  )
}

export default Bar