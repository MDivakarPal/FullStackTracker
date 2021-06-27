import React from 'react'
import {Route,Switch} from 'react-router-dom'
import NodeComponent from './NodeComponent'
import Home from './Home'
import ReactComponent from './ReactComponent'
import MongoComponent from './MongoComponent'
import ExpressComponent from './ExpressComponent'
import HtmlComponent from './HtmlComponent'
import JsComponent from './JsComponent'
import CssComponent from './CssComponent'
import DsaComponent from './DsaComponent'
import PageNotFaound from './PageNotFound'
export default function RouteManager() {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/dsa' exact>
                    <DsaComponent/>
                </Route>
                <Route path='/mongo' exact>
                    <MongoComponent/>
                </Route>
                <Route path='/react' exact>
                    <ReactComponent/>
                </Route>
                <Route path='/express' exact>
                    <ExpressComponent/>
                </Route>
                <Route path='/node' exact>
                    <NodeComponent name='I am Pal'/>
                </Route>
                <Route path='/html' exact>
                    <HtmlComponent/>
                </Route>
                <Route path='js' exact>
                    <JsComponent/>
                </Route>
                <Route path='css' exact>
                    <CssComponent/>
                </Route>
                <Route path='*'>
                 <PageNotFaound/>
                 <h1>Page Not Founnd</h1>
                </Route>
            </Switch>
        </div>
    )
}
