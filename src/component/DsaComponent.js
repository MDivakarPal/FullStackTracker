import React from 'react'
import { TOPIC } from '../data/DsaData' 
import Header from './Header'
import Topic from './Topic'
import '../styles/DsaComponent.css'
import StackHeader from './StackHeader'
export default function DsaComponent() {
    return (
        <div className='DsaComponentContainer'>
        <div> <Header/></div>
        <div className='marginTop'><StackHeader heading='Data Structure and Algorithm'/></div>
            <div className='topicContainer '>
            {
                TOPIC.map(({name,src,source,solved,totalProblems})=><Topic name={name} src={src} solved={totalProblems} source={source}/>)
            }       
                        
             </div>
        </div>
    )
}
