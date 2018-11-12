import React from 'react'
import {connect} from 'react-redux'
import Quiz from './Quiz'
import Question from './Question'
import Results from './Results'
import {loadQuestion, addPoints, nextQuestion, finishedQuiz} from '../actions/questions'


class QuizContainer extends React.Component {
  state = {
    disabled: false
  }

  componentDidMount() {
    this.props.loadQuestion(this.props.questions)
    this.shuffleAnswers()
  }

  getNumber = () => {
    const index = this.props.questions.indexOf(this.props.question)
    return index + 1
  }
  
  shuffleAnswers = () => {
    this.props.questions.map(question => {
    const correct = question.correct_answer
    const answersArray = question.incorrect_answers

    if (answersArray.includes(correct)=== false) answersArray.push(correct)
    answersArray.sort(function() { return 0.5 - Math.random() })
    return answersArray
    })
  }

  handleClick = (event) => {
    this.setState({ disabled: true})

    this.showBackgroundColor()

    if (event.target.innerText === this.props.question.correct_answer) this.props.addPoints()
    
    setTimeout(this.waitForAnswer, 1500)
    } 
  
    showBackgroundColor = () => {
      let answersArray = Array.from(document.getElementsByClassName("answers"))
      console.log(answersArray)

      answersArray.map(answer => {
        console.log(answer.innerText)
        if (answer.innerText === this.props.question.correct_answer) {
          answer.style.backgroundColor = "#bfe59e"
        } else {
          answer.style.backgroundColor = "#efc2ae"
        }
      })
    }

  
  waitForAnswer = () => {
    const currentIndex = this.props.questions.indexOf(this.props.question)
    console.log("?")
    this.setState({disabled: false})
    this.hideBackgroundColor()

    if (currentIndex === this.props.questions.length-1) {
      this.props.finishedQuiz()
    } else {
      this.props.nextQuestion(this.props.questions, currentIndex)
  }
}

hideBackgroundColor = () => {
  let answersArray = Array.from(document.getElementsByClassName("answers"))
  answersArray.map(answer => answer.style.backgroundColor = "white")
}
 


  render() {
    console.log(this.state.disabled)
    return (
    <div className="container quiz shadow p-3 bg-white">

      {!this.props.finished && <Quiz 
        questions={this.props.questions}
        question={this.props.question}
        points={this.props.points}
        getNumber={this.getNumber}
      />}

     {this.props.question !== null && !this.props.finished && <Question
        question={this.props.question}
        shuffleAnswers={this.shuffleAnswers}
        handleClick={this.handleClick}
        disabled={this.state.disabled} 
      />}

      {this.props.finished && <Results 
        questions={this.props.questions}
        points={this.props.points}
        loadQuestion={this.props.loadQuestion}
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

export default connect(mapStateToProps, {loadQuestion, addPoints, nextQuestion, finishedQuiz})(QuizContainer)