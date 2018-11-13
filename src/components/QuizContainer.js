import React from 'react'
import {connect} from 'react-redux'
import Quiz from './Quiz'
import Question from './Question'
import Results from './Results'
import {loadQuestion, addPoints, nextQuestion, finishedQuiz} from '../actions/questions'


class QuizContainer extends React.Component {
  state = {
    disabled: false,
    correctAnswer: false,
    wrongAnswer: false
  }

  componentDidMount() {
    this.props.loadQuestion(this.props.questions)
    this.shuffleAnswers()
  }

  shuffleAnswers = () => {
    this.props.questions.map(question => {
    const answersArray = question.answers

    answersArray.sort(function() { return 0.5 - Math.random() })
    return answersArray
    })
  }

  getNumber = () => {
    const index = this.props.questions.indexOf(this.props.question)
    return index + 1
  }
  
  handleClick = (event) => {
    this.showBackgroundColor()

    if (event.target.innerText === this.props.question.correct_answer) {
      this.props.addPoints()
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
        } else {
          answer.style.backgroundColor = "#DC3446"
        }
        
      })
    }

  waitForAnswer = () => {
    const currentIndex = this.props.questions.indexOf(this.props.question)

    this.setState({disabled: false, wrongAnswer: false, correctAnswer: false })

    if (currentIndex === this.props.questions.length-1) {
      this.props.finishedQuiz()
    } else {
      this.props.nextQuestion(this.props.questions, currentIndex)
  }
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
        correctAnswer={this.state.correctAnswer}
        wrongAnswer={this.state.wrongAnswer}
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