import React from 'react'
import '../styles/Header.css'
import { NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <div class='header'>
        <h2>📛📛📛📛Full Stack Interview Preparation Tracker📛📛📛📛</h2>
      <NavLink to='/'>  <button className=''>Home</button></NavLink>
        </div>
    )
}