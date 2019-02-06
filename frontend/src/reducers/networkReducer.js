import { NETWORK_STATUS_RECEIVED } from '../constants/NetworkActionTypes'
import { TOKENS_MINTED, TOKENS_SOLD } from '../constants/TokenActionTypes'
import { REGISTERED_USER } from '../constants/UserActionTypes'

const initialState = {
  totalTokens: 0,
  totalReputation: 0
}

export default function networkReducer (state = initialState, action) {
  switch (action.type) {
    case NETWORK_STATUS_RECEIVED:
      if (!action.responseDetails.data.network) {
        return state
      } else {
        return Object.assign({}, state, action.responseDetails.data.network)
      }
    case REGISTERED_USER:
      return Object.assign({}, state, {
        totalReputation: state.totalReputation + 10000
      })
    case TOKENS_MINTED:
      return Object.assign({}, state, { totalTokens: state.totalTokens + action.receipt.logs[0].args.amountMinted.toNumber()})
    case TOKENS_SOLD:
      return Object.assign({}, state, { totalTokens: state.totalTokens - action.receipt.logs[0].args.amountWithdrawn.toNumber() })
    default:
  }
  return state
}
