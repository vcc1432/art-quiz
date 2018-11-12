import React from 'react'
import {connect} from 'react-redux'
import Quiz from './Quiz'
import Question from './Question'
import Results from './Results'
import {loadQuestion, addPoints, nextQuestion, finishedQuiz} from '../actions/questions'


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
    if (currentIndex === this.props.questions.length-1) {
      this.props.finishedQuiz()
    } else {
    if (event.target.innerText === this.props.question.correct_answer) this.props.addPoints()
    this.props.nextQuestion(this.props.questions, currentIndex)
    }  
  }


  render() {
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
        handleClick={this.handleClick} />}

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