import { combineReducers } from 'redux'
import getSTBInfo from './getSTBInfo'
import stbListReducer from './stb-list-reducer'



const todoApp = combineReducers({
    stbListReducer
})

export default todoApp
