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

  componentDidMount() {
    const {loadQuestion, questions} = this.props
    this.shuffleQuestions()
    this.shuffleAnswers()
    loadQuestion(questions)
  }

  shuffleQuestions() {
    this.props.questions.sort(function() { return 0.5 - Math.random() })
  }

  shuffleAnswers = () => {
    this.props.questions.map(question => {
    const answersArray = question.answers

    answersArray.sort(function() { return 0.5 - Math.random() })
    return answersArray
    })
  }

  getNumber = () => {
    const { question, questions } = this.props
    const index = questions.indexOf(question)
    return index + 1
  }
  
  handleClick = (event) => {
    const { question, addPoints} = this.props
    this.showBackgroundColor()

    if (event.target.innerText === question.correct_answer) {
      addPoints()
      this.setState({ disabled: true, correctAnswer: true})
    } else {
      this.setState({ disabled: true, wrongAnswer: true})
    }
    
    setTimeout(this.waitForAnswer, 2500)
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