import * as React from 'react'


export default function Question(props) {
  const { disabled, correctAnswer, wrongAnswer, handleClick, question } = props
  return (
  <div className="question">
    <div className="question-container text-center">
      <h3>{question.question}</h3>
    </div>
    <div>
      <div className="row">
        <div className="img-container col-sm-6">
          <img 
          className="img image-fluid mx-auto" 
          src={question.imgUrl} 
          alt={question.question}
          />
        </div>
        <div className="col-sm-6">

        {correctAnswer &&
          <p class="text-success answerAlert" >You're right! The answer is <strong>{question.correct_answer}</strong>.
          </p>}

        {wrongAnswer &&
          <p class="wrong-answer answerAlert" >Sorry, that's not correct. The right answer is <strong>{question.correct_answer}</strong>.
          </p>}
        
        {question.answers.map(answer => 
          <button 
            key={answer.id} 
            disabled={disabled} 
            className="answers shadow-sm" 
            onClick={handleClick}>{answer.name}
          </button>)}
        
        </div>
      </div>
    </div>
      
  </div>)
}


