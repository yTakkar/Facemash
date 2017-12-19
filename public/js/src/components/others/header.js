import React from 'react'
import { NavLink } from 'react-router-dom'
import $ from 'jquery'

export default class Header extends React.Component {
  render() {
    let username = $('.data').data('username')

    return (
      <div className='header_loggedin' >
        <div className='left' >
          <NavLink activeClassName='ha_active' exact to='/'>Facemash</NavLink>
          <NavLink activeClassName='ha_active' exact to='/top-users' >Top Users</NavLink>
        </div>
        <div className='right' >
          <NavLink activeClassName='ha_active' to='/edit-profile' >Edit Profile</NavLink>
          <NavLink activeClassName='ha_active' to={`/profile/${username}`} >Profile</NavLink>
          <a href='/logout' >Logout</a>
        </div>
      </div>
    )
  }
}
