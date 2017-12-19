import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './others/header'
import Home from './home/home'
import Profile from './profile/profile'
import EmailVerification from './email-verification/email-verification'
import Error from './error/error'
import EditProfile from './edit-profile/edit-profile'
import TopUsers from './topUsers/topUsers'

export default class App extends React.Component {
  render(){
    return (
      <Router>
        <div className='app' >
          <Header/>
          <div className='notes_wrapper' >
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/profile/:username' exact component={Profile} />
              <Route path='/email-verification/:is' component={EmailVerification} />
              <Route path='/edit-profile' component={EditProfile} />
              <Route path='/top-users' component={TopUsers} />
              <Route path='/error/:what' component={Error} />
              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
