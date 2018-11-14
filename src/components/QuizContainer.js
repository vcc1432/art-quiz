import React from 'react'
import {connect} from 'react-redux'
import Quiz from './Quiz'
import Question from './Question'
import Results from './Results'
import {loadQuestion, addPoints, nextQuestion, finishedQuiz, reset} from '../actions/questions'

class QuizContainer extends React.Component {
  state = {
    disabled: false,
    correctAnswer: false,
    wrongAnswer: false
  }

  // When the component is mounted, the questions and answers are shuffled.
  // The first question in the shuffled array is shown.
  componentDidMount() {
    const {loadQuestion, questions} = this.props
    this.shuffleQuestions()
    this.shuffleAnswers()
    loadQuestion(questions)
  }

  shuffleQuestions() {
    this.props.questions.sort(() => 0.5 - Math.random())
  }

  // Finds the array of answers for every item in the questions array, and shufffles it. 
  shuffleAnswers = () => {
    this.props.questions.map(question => {
      const answersArray = question.answers

      answersArray.sort(() => 0.5 - Math.random())
      return answersArray
    })
  }

  // This function looks for the index of the current question in the questions array, returns the index + 1
  getNumber = () => {
    const { question, questions } = this.props
    const index = questions.indexOf(question)
    return index + 1
  }
  
  // handleClick fires when an answer is clicked. 
  // Displays the background of the right answer; 
  // Sets the local state to correct/wrong, depending on which answer is clicked.
  // If the right answer is clicked, 1 point is added to redux state by the action addPoints.
  // Sets a timeout in which the answer is displayed.
  // After the timeout, the function waitForAnswer fires.

  handleClick = (event) => {
    const { question, addPoints} = this.props
    this.showBackgroundColor()

    if (event.target.innerText === question.correct_answer) {
      addPoints()
      this.setState({ disabled: true, correctAnswer: true})
    } else {
      this.setState({ disabled: true, wrongAnswer: true})
    }
    
    setTimeout(this.waitForAnswer, 3000)
    } 
  
    showBackgroundColor = () => {
      let answersArray = Array.from(document.getElementsByClassName("answers"))

      answersArray.map(answer => {
        if (answer.innerText === this.props.question.correct_answer) {
          answer.style.backgroundColor = "#28A746"
          answer.style.borderColor = "#28A746"
        }  
      })
    }

  // Fires after timer ends. Resets the local state.
  // Action nextQuestion (index of current question +1 ) or finishedquiz (displays resultspage) is fired. 
  waitForAnswer = () => {
    const {questions, question, finishedQuiz, nextQuestion} = this.props
    const currentIndex = questions.indexOf(question)

    this.setState({disabled: false, wrongAnswer: false, correctAnswer: false })

    if (currentIndex === questions.length-1) {
      finishedQuiz()
    } else {
      nextQuestion(questions, currentIndex)
    }
  }

  render() {
    const { questions, question, points, loadQuestion, reset, finished } = this.props
    const { disabled, correctAnswer, wrongAnswer } = this.state

    return (
    <div className="container shadow p-3 bg-white">

      {!finished && <Quiz 
        questions={questions}
        points={points}
        getNumber={this.getNumber}
        reset={reset}
      />}

     {question !== null && !finished && <Question
        question={question}
        handleClick={this.handleClick}
        disabled={disabled} 
        correctAnswer={correctAnswer}
        wrongAnswer={wrongAnswer}
        
      />}
      
      {finished && <Results 
        questions={questions}
        points={points}
        loadQuestion={loadQuestion}
      />}
    
    </div>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.quiz.questions,
  question: state.quiz.currentQuestion,
  points: state.quiz.points,
  finished: state.quiz.finishedQuiz
})

export default connect(mapStateToProps, {loadQuestion, addPoints, nextQuestion, finishedQuiz, reset})(QuizContainer)