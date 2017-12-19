import React from 'react'
import { Link } from 'react-router-dom'
import { post } from 'axios'
import Notify from 'handy-notification'
import $ from 'jquery'
import { connect } from 'react-redux'
import { facemash } from '../../store/actions/facemash-a'

@connect(store => {
  return {
    store
  }
})

export default class Card extends React.Component {

  state = {
    user: {},
    against: {},
  }

  componentWillReceiveProps = ({ user, against }) => {
    this.setState({ user, against })
  }

  vote = async e => {
    e.preventDefault()
    $('.card_select').blur().addClass('a_disabled')

    let
      { user, against } = this.state,
      { dispatch } = this.props,
      { data: { mssg } } = await post('/api/vote', { user, against })

    $('.card_select').removeClass('a_disabled')
    Notify({ value: mssg })
    dispatch(facemash())
  }

  render(){
    let { user: { id, username } } = this.state

    return (
      <div>
        <div className='card'>
          <img src={id ? `/users/${id}/avatar.jpg` : '/images/react.png'} />
          <Link to={`/profile/${username}`} className='card_username'>{username}</Link>
          <div className='card_links'>
            <a href='#' className='pri_btn card_select' onClick={this.vote} >Vote {username}</a>
          </div>
        </div>
      </div>
    )
  }
}

