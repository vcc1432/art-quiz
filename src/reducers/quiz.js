import questions from '../lib/db.json'
import {LOAD_QUESTION, ADD_POINTS, NEXT_QUESTION, FINISHED_QUIZ, RESET} from '../actions/questions'

const initialState = { 
  questions,
  points: 0,
  currentQuestion: null,
  finishedQuiz: false
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_QUESTION:
      return {
        ...state, 
        currentQuestion: action.payload,
        finishedQuiz: false
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

    case FINISHED_QUIZ: 
      return {
        ...state,
        finishedQuiz: action.payload
      }

    case RESET:
      return initialState

    default:
      return state
  }
}

export default reducer