import React from 'react'
import StackHeader from './StackHeader'
import { NavLink } from 'react-router-dom'
import { Route , Switch} from 'react-router-dom'
import DsaTopic from './DsaTopic'
export default function Topic({name,src,solved,source}) {
    return (
        <Switch>
        <Route path='/dsa'>
        <div className='topic'>
           <div ><StackHeader heading={name}/></div>
            <img src={src} alt='Not found'/>
            <div className='buttonTopic'>
              <button className='solved'>{solved}</button>
              <NavLink to={`/dsa/topic`} > <button className='track'>Track</button></NavLink>
            </div>
        </div>
        <Route path={`/dsa/topic`}>
        <DsaTopic topic={name} source={source}/>
        </Route>
        </Route>
        </Switch>
    )
}
