import { post } from 'axios'

const get_top_users = () => {
  return dispatch => {
    post('/api/get-top-users')
      .then(u => dispatch({ type: 'GET_TOP_USERS', payload: u.data }) )
      .catch(e => console.log(e))
  }
}

module.exports = {
  get_top_users,
}
