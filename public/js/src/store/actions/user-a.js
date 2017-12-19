import { post } from 'axios'

const user_details = username => {
  return dispatch => {
    post('/api/get-user-details', { username })
      .then(get => dispatch({ type: 'USER_DETAILS', payload: get.data }))
      .catch(err => console.log(err))
  }
}

const get_profile_views = username => {
  return dispatch => {
    post('/api/get-profile-views', { username })
      .then(get => dispatch({ type: 'GET_PROFILE_VIEWS', payload: get.data }))
      .catch(err => console.log(err))
  }
}

const user_facemash_details = username => {
  return dispatch => {
    post('/api/user-facemash-details', { username })
      .then(r => dispatch({ type: 'USER_FACEMASH_DETAILS', payload: r.data }) )
      .catch(e => console.log(e) )
  }
}

module.exports = {
  user_details,
  get_profile_views,
  user_facemash_details,
}
