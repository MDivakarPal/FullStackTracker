import React from 'react'
import '../styles/Header.css'
import { NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <div class='header'>
        <h2 style={{textAlign:'center'}}>ππππFull Stack Interview Preparation Trackerππππ</h2>
      <NavLink to='/'>  <button className=''>Home</button></NavLink>
        </div>
    )
}