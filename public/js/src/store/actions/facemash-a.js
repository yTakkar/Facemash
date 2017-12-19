import { post } from 'axios'

const facemash = () => {
  return dispatch => {
    post('/api/users-for-facemash')
      .then(users => dispatch({ type: 'GET_USERS_FOR_FACEMASH', payload: users.data }))
      .catch(e => console.log(e))
  }
}

module.exports = {
  facemash
}
