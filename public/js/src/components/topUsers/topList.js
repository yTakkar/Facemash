import React from 'react'
import { Link } from 'react-router-dom'

export default class TopList extends React.Component {
  render() {
    let { user, username, votes, facemash_count } = this.props

    return (
      <div className="explores_list" >
        <div className="exl_main">
          <img src={ user ? `/users/${user}/avatar.jpg` : '/images/spacecraft.jpg' } />
          <div className="exl_content">
            <span className='exl_username' >{username}</span>
            <div className="exl_desc">
              <span className="exl_email">{votes} Votes</span>
              <span className="exl_desc_sep">•</span>
              <span className="exl_followers">{facemash_count} Facemashes</span>
            </div>
          </div>
        </div>
        <div className="exl_ff">
          <Link to={`/profile/${username}`} className='pri_btn' >Profile</Link>
        </div>
      </div>
    )
  }
}
