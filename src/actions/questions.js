export const LOAD_QUESTION = 'LOAD_QUESTION'
export const ADD_POINTS = 'ADD_POINTS'
export const NEXT_QUESTION = 'NEXT_QUESTION'
export const FINISHED_QUIZ ='FINISHED_QUIZ'
export const RESET = 'RESET'

// Finds the first item in the questions array
export const loadQuestion = (questionsArray) => ({
  type: LOAD_QUESTION,
  payload: questionsArray[0]
})

// Adds one point when right answer is clicked
export const addPoints = () => ({
  type: ADD_POINTS,
  payload: 1
})

//Finds the next item in the questions array
export const nextQuestion = (questionsArray, index) => ({
  type: NEXT_QUESTION,
  payload: questionsArray[index +1]
}) 

//Is fired when the last question is answered
export const finishedQuiz = () => ({
  type: FINISHED_QUIZ,
  payload: true
})

//Is fired when user clicks title in quiz
export const reset = () => ({
  type: RESET
})
