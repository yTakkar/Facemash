import React from 'react'
import { connect } from 'react-redux'
import Title from '../others/title'
import { FadeIn } from 'animate-components'
import Card from './card'
import { facemash } from '../../store/actions/facemash-a'

@connect(store => {
  return {
    facemash: store.Facemash
  }
})

export default class Home extends React.Component {

  componentDidMount = () => {
    this.props.dispatch(facemash())
  }

  refresh_users = e => {
    e.preventDefault()
    this.props.dispatch(facemash())
  }

  render(){
    let { users } = this.props.facemash

    return (
      <div class='home' >

        <Title value='Home' />

        <FadeIn duration='300ms' >
          <div className='facemash' >

            <div className='fm_header'>
              <span>Whome do you wanna vote?</span>
            </div>

            <div className='fm_main'>
              <Card user={users[0]} against={users[1]} />
              <span className='fm_or'>OR</span>
              <Card user={users[1]} against={users[0]} />
            </div>

            <div className='fm_bottom'>
              <a href='#' className='refresh pri_btn' onClick={this.refresh_users} >Refresh users</a>
            </div>

          </div>
        </FadeIn>

      </div>
    )
  }
}
