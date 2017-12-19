/* eslint indent:0 */
/* eslint no-unreachable:0 */

const def_user = {
  user_details: {},
  profile_views: 0,
  ranking: 0,
  votes: 0,
  facemash_count: 0,
}

const user = (state=def_user, action) => {
  let py = action.payload

  switch (action.type) {
    case 'USER_DETAILS':
      return { ...state, user_details: py }
      break

    case 'GET_PROFILE_VIEWS':
      return { ...state, profile_views: py }
      break

    case 'USER_FACEMASH_DETAILS':
      return {
        ...state,
        ranking: py.ranking,
        votes: py.votes,
        facemash_count: py.facemash_count,
      }
      break
  }
  return state
}

export default user
