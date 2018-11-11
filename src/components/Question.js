import * as React from 'react'


export default function Question(props) {
  return (
  <div className="text-center question">
    <h1>{props.question.question}</h1>
    <ul>
      {props.shuffleAnswers().map(answer => 
      <li onClick={props.handleClick}>{answer}</li>)}
    
    </ul>
      
  </div>)
}


