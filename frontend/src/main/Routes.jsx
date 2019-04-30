import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../component/home/Home'
import UserCrud from '../component/user/UserCrud'

export default props =>
    <Switch>
        <Route extact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>