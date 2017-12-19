/* eslint indent:0 */
/* eslint no-unreachable:0 */

const top_users_def = {
  users: []
}

const topUsers = (state=top_users_def, action) => {
  let py = action.payload

  switch (action.type) {
    case 'GET_TOP_USERS':
      return { ...state, users: py }
      break
  }
  return state
}

export default topUsers
