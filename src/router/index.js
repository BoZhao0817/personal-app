import {Route, Switch} from 'react-router-dom';
import React from "react";
import Login from "../component/Login";
import Register from "../component/Register";
import Home from "../component/Home";

const Router = () => (
    <Switch>
        /*must add exact 精确匹配 否则遇到/会认为是一样的, switch 去匹配*/
        <Route exact path='/' component ={Home}/>
        <Route exact path='/login' component ={Login}/>
        <Route exact path='/register' component ={Register}/>
    </Switch>
)

export default Router;