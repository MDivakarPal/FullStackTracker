import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/StackDetails.css'
export default function StackDetails({img:img1,name,link}) {
    return (
        <div className='stackContainer'>
            <h2 className='header1'>{name}</h2>
            <img src={img1} className='images' alt='Not fouand'/>
        <div className='buttonContainer'>
          <input style={{height:'20px'}} className='range' 
          readOnly='true' value='20' min='0' max='100' type='range' />
        <NavLink to={`/${link}`}> <button>Track Progress</button></NavLink>
        </div>
        </div>
    )
}
