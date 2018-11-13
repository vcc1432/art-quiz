import * as React from 'react'


export default function Question(props) {
  return (
  <div className="question">
    <div className="question-container text-center">
      <h3>{props.question.question}</h3>
    </div>
    <div>
      <div className="row">
        <div className="img-container col-sm-6">
         <img className="img image-fluid mx-auto" src={props.question.imgUrl} alt={props.question.question}/>
        </div>
        <div className="col-sm-6">

        {props.correctAnswer &&
          <p class="text-success answerAlert" >You're right! The answer is <strong>{props.question.correct_answer}</strong>.</p>}

        {props.wrongAnswer &&
          <p class="wrong-answer answerAlert" >Sorry, that's not correct. The right answer is <strong>{props.question.correct_answer}</strong>.</p>}
        
        {props.question.answers.map(answer => 
          <button key={answer.id} disabled={props.disabled} className="answers shadow-sm" onClick={props.handleClick}>{answer.name}</button>)}
        
        </div>
      </div>
    </div>
      
  </div>)
}


