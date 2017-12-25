import React from 'react'
import Title from '../others/title'
import { FadeIn } from 'animate-components'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as fn from '../../utils/utils'
import Banner from './banner'
import Nothing from '../others/nothing'

@connect(store => {
  return {
    user: store.User
  }
})

export default class Profile extends React.Component {

  state = {
    invalid_user: false
  }

  inv_user = () => this.setState({ invalid_user: true })

  componentDidMount(){
    let {
      match: { params: { username } },
      dispatch
    } = this.props
    fn.forProfile({ dispatch, username, invalidUser: this.inv_user })
  }

  componentWillReceiveProps({ dispatch, match }) {
    if (this.props.match.url != match.url){
      fn.forProfile({ dispatch, username: match.params.username, invalidUser: this.inv_user })
    }
  }

  render() {
    let
      { invalid_user } = this.state,
      {
        user: { user_details },
        match: { params: { username } }
      } = this.props

    return (
      <div>

        { invalid_user ? <Redirect to='/error/user_nf' /> : null }

        <Title value={`@${username}`} />

        <div
          class='profile-data'
          id='profile-data'
          data-get-username={user_details.username}
          data-getid={user_details.id}
        ></div>

        <FadeIn duration='300ms' >
          <div className='aligner' >
            <Banner/>
            <Nothing mssg='Getting bored? Go ahead and vote in the facemash.' />
          </div>
        </FadeIn>

      </div>
    )
  }
}
