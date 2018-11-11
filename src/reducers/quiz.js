import questions from '../lib/db.json'
import {LOAD_QUESTION, ADD_POINTS, NEXT_QUESTION} from '../actions/questions'

const initialState = { 
  questions,
  points: 0,
  currentQuestion: null
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_QUESTION:
      return {
        ...state, 
        currentQuestion: action.payload
      }
    case ADD_POINTS:
      return {
        ...state,
        points: state.points + action.payload
      }
    case NEXT_QUESTION:
    return {
      ...state,
      currentQuestion: action.payload
    }
    default:
      return state
  }
}

export default reducer