import { combineReducers } from 'redux'
import todos from './todos'
import jumbotron from './jumbotron'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  jumbotron
  
})

export default todoApp
