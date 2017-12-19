import React from 'react'
import Title from '../others/title'

export default class EmailVerification extends React.Component{
  render(){

    let
      { params: { is } } = this.props.match,
      mssg

    if (is == 'yes') {
      mssg = 'You email has been verified successfully!'
    } else if (is == 'alr') {
      mssg = 'Email already verified!'
    } else {
      mssg = 'Something went wrong!'
    }

    return (
      <div>
        <Title value='Email Verification' />
        <div className='registered' >
          <span>{ mssg }</span>
        </div>
      </div>
    )
  }
}
