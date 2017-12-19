/* eslint indent:0 */

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as fn from '../../utils/utils'

@connect(store => {
  return {
    user: store.User
  }
})

export default class Banner extends React.Component {
  render() {
    let {
      user: { user_details, profile_views, ranking, facemash_count, votes },
    } = this.props

    return (
      <div>
        <div className='user_banner'>

          <div className='profile_img_div'>
            <img
              src={ user_details.id ? `/users/${user_details.id}/avatar.jpg` : '/images/react.png' }
              alt='Your profile'
            />
          </div>

          <div className='user_buttons'>
          {
            fn.Me(user_details.id)
            ? <Link to='/edit-profile' className='follow pri_btn' >Edit Profile</Link>
            : null
          }
          </div>

          <div className='user_info'>
            {
              user_details.id ?
                <div>
                  <Link to='#' className='user_main_link'>{user_details.username}</Link>
                  <span className='user_no_notes'>{user_details.email}</span>
                  <div className={`user_bio ${!user_details.bio ? 'no_bio' : null}`}>
                    {
                      user_details.bio ?
                        <span>{user_details.bio}</span>
                        :
                        fn.Me(user_details.id)
                          ? <span>You have no bio!!</span>
                          : <span>{`${user_details.username} has no bio!!`}</span>
                    }
                  </div>
                </div>
              : null
            }

            <hr />
            <div className='user_stats '>
              <div className='stat_disabled' >
                <span className='stat_hg'>{votes}</span>
                <span className='stat_nhg'>Votes</span>
              </div>
              <div className='stat_disabled' >
                <span className='stat_hg'>{facemash_count}</span>
                <span className='stat_nhg'>Facemashes</span>
              </div>
              <div className='stat_disabled' >
                <span className='stat_hg'>#{ranking}</span>
                <span className='stat_nhg'>Ranking</span>
              </div>
              <div className='stat_disabled '>
                <span className='stat_hg'>{profile_views}</span>
                <span className='stat_nhg'>Profile views</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}
