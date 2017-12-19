/* eslint indent:0 */
/* eslint no-unreachable:0 */

const fm_def = {
  users: [],
}

const facemash = (state=fm_def, action) => {
  let py = action.payload

  switch (action.type) {
    case 'GET_USERS_FOR_FACEMASH':
      return { ...state, users: py }
      break
  }
  return state
}

export default facemash
