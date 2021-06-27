import React from 'react'
import '../styles/Home.css';
import Header from './Header'
import StackDetails from './StackDetails';
import { STACK_DATA } from '../data/StackData';
export default function Home() {
    return (
        <div className='homeContainer'>
        <div style={{height:'80px',width:'100%',zIndex:1000}}><Header/></div>
        <div className='stackContainerHome'>
            {
                STACK_DATA.map(({name,img,type})=><StackDetails name={name} link={type} img={img}/>)
            }
         </div>
        </div>
    )
}
