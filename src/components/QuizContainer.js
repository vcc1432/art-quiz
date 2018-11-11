import React from 'react'
import {connect} from 'react-redux'
import Quiz from './Quiz'
import Question from './Question'
import {loadQuestion, addPoints, nextQuestion} from '../actions/questions'


class QuizContainer extends React.Component {
  componentDidMount() {
    this.props.loadQuestion(this.props.questions)
  }

  getNumber = () => {
    const index = this.props.questions.indexOf(this.props.question)
    return index + 1
  }
  
  shuffleAnswers = () => {
    const correct = this.props.question.correct_answer
    const answersArray = this.props.question.incorrect_answers

    if (answersArray.includes(correct)=== false) answersArray.push(correct)
    answersArray.sort(function() { return 0.5 - Math.random() })
    return answersArray
  }

  handleClick = (event) => {
    const currentIndex = this.props.questions.indexOf(this.props.question)
    if (event.target.innerText === this.props.question.correct_answer) this.props.addPoints()
    this.props.nextQuestion(this.props.questions, currentIndex)
  }


  render() {
    return (
    <div className="container quiz shadow p-3 bg-white">
      <Quiz 
        questions={this.props.questions}
        question={this.props.question}
        points={this.props.points}
        getNumber={this.getNumber}
        />
     {this.props.question !== null && <Question
        question={this.props.question}
        shuffleAnswers={this.shuffleAnswers}
        handleClick={this.handleClick} />}
    </div>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.quiz.questions,
  question: state.quiz.currentQuestion,
  points: state.quiz.points
})

export default connect(mapStateToProps, {loadQuestion, addPoints, nextQuestion})(QuizContainer)