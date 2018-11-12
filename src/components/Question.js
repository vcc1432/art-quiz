import * as React from 'react'


export default function Question(props) {
  return (
  <div className="text-center question">
    <h1>{props.question.question}</h1>
    <div>
    <img clasName="imag-fluid" src={props.question.imgUrl} alt={props.question.question}/>
      {props.question.incorrect_answers.map(answer => 
      <button disabled={props.disabled} className="answers" onClick={props.handleClick}>{answer}</button>)}
    
    </div>
      
  </div>)
}


