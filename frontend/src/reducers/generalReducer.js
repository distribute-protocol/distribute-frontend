import { GET_TOTAL_TOKENS, TOTAL_TOKENS_RECEIVED, GET_USER_TOKENS, USER_TOKENS_RECEIVED } from '../constants/GeneralActionTypes'
const initialState = {
  totalTokens: '',
  userTokens: {}
}

export default function generalReducer (state = initialState, action) {
  let totalTok
  switch (action.type) {
    case GET_TOTAL_TOKENS:
      console.log('get total tokens')
      return state
    case TOTAL_TOKENS_RECEIVED:
      console.log('total tokens received')
      if (action.responseDetails.value[0] === undefined) {
        console.log('something undefined')
        return initialState
      } else {
        totalTok = action.responseDetails.value[0].balance
        return Object.assign({}, state, {totalTokens: totalTok})
      }
    case GET_USER_TOKENS:
      console.log('get user tokens')
      return state
    case USER_TOKENS_RECEIVED:
      console.log('user tokens received')
      if (action.responseDetails.value[0] === undefined) {
        console.log('something undefined')
        return state
      } else {
        let userBal = action.responseDetails.value[0].balance
        let userAccount = action.responseDetails.value[0].account
        let newUserTokens = Object.assign({}, state.userTokens, {[userAccount]: userBal})
        return Object.assign({}, state, {userTokens: newUserTokens})
      }
    default:
  }
  return state
}
