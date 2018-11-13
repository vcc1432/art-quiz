export const LOAD_QUESTION = 'LOAD_QUESTION'
export const ADD_POINTS = 'ADD_POINTS'
export const NEXT_QUESTION = 'NEXT_QUESTION'
export const FINISHED_QUIZ ='FINISHED_QUIZ'
export const RESET = 'RESET'

export const loadQuestion = (questionsArray) => ({
  type: LOAD_QUESTION,
  payload: questionsArray[0]
})

export const addPoints = () => ({
  type: ADD_POINTS,
  payload: 1
})

export const nextQuestion = (questionsArray, index) => ({
  type: NEXT_QUESTION,
  payload: questionsArray[index +1]
}) 

export const finishedQuiz = () => ({
  type: FINISHED_QUIZ,
  payload: true
})

export const reset = () => ({
  type: RESET
})
