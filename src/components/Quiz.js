import * as React from 'react'
import { Link } from 'react-router-dom'


export default function Quiz(props) {
  return (
  <div className="row text-center border-bottom">
    <div class="col">
      <h2>question</h2>
      <h1 className="display-1">{props.getNumber()}</h1>
      <h5>of {props.questions.length}</h5>
    </div>
    <div className="col-6">
    <Link to="/" style={{color: 'black', textDecoration: 'none' }}><h1 className="display-2">Art Quiz</h1></Link>
    </div>
    <div className="col">
      <h2>Score</h2>
      <h1 className="display-2">{props.points}</h1>
      <h5>Points</h5>
    </div>
  </div>)
}


