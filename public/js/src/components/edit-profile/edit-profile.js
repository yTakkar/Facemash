import React from 'react'
import { FadeIn } from 'animate-components'
import { connect } from 'react-redux'
import $ from 'jquery'
import Title from '../others/title'
import * as user_action from '../../store/actions/user-a'
import * as fn from '../../utils/utils'
import TimeAgo from 'handy-timeago'
import ChangeAvatar from './change-avatar'
import Overlay from '../others/overlay'

@connect(store => {
  return {
    user: store.User
  }
})

export default class Edit extends React.Component {

  state = {
    username: '',
    email: '',
    bio: '',
    file: '',
    avatar_change: false,
    preview_img: '/images/react.png',
    targetFile: ''
  }

  componentDidMount = () => {
    let
      { dispatch } = this.props,
      username = $('.data').data('username')
    dispatch(user_action.user_details(username))
  }

  componentWillReceiveProps = ({ user: { user_details: { username, email, bio } } }) => {
    this.setState({ username, email, bio })
  }

  /* eslint indent:0 */
  /* eslint no-unreachable:0 */
  update_ = (e, of) => {
    let v = e.target.value
    switch (of) {
      case 'username':
        this.setState({ username: v })
        break
      case 'email':
        this.setState({ email: v })
        break
      case 'bio':
        this.setState({ bio: v })
        break
      case 'file':
        this.setState({ file: v })
        break
      case 'avatar_change':
        this.setState(state => ({ avatar_change: !state.avatar_change }))
        break
    }
  }

  edit_profile = e => {
    e.preventDefault()
    let
      { username: susername, email: semail } = this.props.user.user_details,
      { username, email, bio } = this.state
    fn.edit_profile({ susername, semail, username, email, bio })
  }

  resend_vl = e => {
    e.preventDefault()
    fn.resend_vl()
  }

  preview_avatar = e => {
    this.update_(e, 'file')
    this.update_(e, 'avatar_change')
    let
      reader = new FileReader(),
      file = e.target.files[0]
    this.setState({ targetFile: file })
    reader.onload = e => this.setState({ preview_img: e.target.result })
    reader.readAsDataURL(file)
  }

  back = e => {
    e.preventDefault()
    this.update_(e, 'avatar_change')
    this.setState({ file: '' })
  }

  change_avatar = e => {
    e.preventDefault()
    fn.change_avatar({ file: this.state.targetFile })
  }

  render(){
    let
      { username, email, bio, file, avatar_change, preview_img } = this.state,
      { joined, id } = this.props.user.user_details

    return (
      <div class='edit' >

        <Title value='Edit Profile' />

        <FadeIn duration='300ms' className='edit_animation' >
          <div className='edit_info'>
            <img
              className='edit_img'
              src={id ? `/users/${id}/avatar.jpg` : '/images/react.png'}
              alt='Your avatar'
            />
            <span>{`@${username}`}</span>
          </div>
          <div className='eu_div'>
            <span className='edit_span'>Username</span>
            <input
              type='text'
              className='e_username'
              placeholder='Username..'
              autoComplete='false'
              autoFocus
              spellCheck='false'
              value={username}
              onChange={e => this.update_(e, 'username')}
            />
          </div>
          <div className='ee_div'>
            <span className='edit_span'>Email</span>
            <input
              type='email'
              className='e_email'
              placeholder='Email..'
              autoComplete='false'
              spellCheck='false'
              value={email}
              onChange={e => this.update_(e, 'email')}
            />
          </div>
          <div className='eb_div'>
            <span className='edit_span'>Bio</span>
            <textarea
              className='e_bio'
              placeholder='Bio..'
              spellCheck='false'
              value={bio}
              onChange={e => this.update_(e, 'bio')}
            ></textarea>
          </div>
          <div className='eb_btns'>
            <form className='avatar_form' method='post' encType='multipart/formdata' >
              <input
                type='file'
                name='avatar'
                id='avatar_file'
                accept='image/*'
                value={file}
                onChange={this.preview_avatar}
              />
              <label
                for='avatar_file'
                className='avatar_span sec_btn'
              >Change avatar</label>
            </form>
            <a href='#' className='pri_btn e_done' onClick={this.edit_profile} >Done editing</a>
          </div>
          <div className='e_joined'>
            <span>You joined Facemash {TimeAgo(joined)}!!</span>
          </div>

          {
            !fn.e_v() ?
              <div className='resend_vl_div' >
                <a href='#' className='pri_btn resend_vl' onClick={this.resend_vl}>Email not verified. Resend verification link</a>
              </div>
            : null
          }

        </FadeIn>

        {
          avatar_change ?
            <div>
              <Overlay/>
              <ChangeAvatar
                back={this.back}
                preview_img={preview_img}
                change_avatar={this.change_avatar}
              />
            </div>
          : null
        }

      </div>
    )
  }
}
