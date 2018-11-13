import * as React from 'react'


export default function Question(props) {
  return (
  <div className="question">
    <div className="question-container text-center p-5 m-1">
      <h3>{props.question.question}</h3>
    </div>
    <div>
      <div className="row">
        <div className="col-sm-6">
         <img className="img image-fluid mx-auto" src={props.question.imgUrl} alt={props.question.question}/>
        </div>
        <div className="col-sm-6">

        {props.correctAnswer &&
          <p class="text-success" >You're right! The answer is <strong>{props.question.correct_answer}</strong>.</p>
        }

        {props.wrongAnswer &&
          <p class="text-danger" >Sorry, that's not correct. The right answer is <strong>{props.question.correct_answer}</strong>.</p>
        }
          {props.question.answers.map(answer => 
          <button key={answer.id} disabled={props.disabled} className="answers shadow-sm p-4 my-4 border" onClick={props.handleClick}>{answer.name}</button>)}
        </div>
      </div>
    </div>
      
  </div>)
}


