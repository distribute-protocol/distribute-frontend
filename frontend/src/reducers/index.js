import NavigationReducer from './NavigationReducer'
import userReducer from './userReducer'
import projectReducer from './projectReducer'
import pollReducer from './pollReducer'
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

const Nemo = combineReducers({
  navigation: NavigationReducer,
  user: userReducer,
  projects: projectReducer,
  polls: pollReducer,
  router: routerReducer
})

export default Nemo
