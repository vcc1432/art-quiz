import * as React from 'react'
import { Link } from 'react-router-dom'


export default function Quiz(props) {
  const { questions, points, getNumber, reset } = props
  return (
  <div className="row text-center border-bottom align-items-center">
    <div className="col-sm">
      <h2>question {getNumber()} of {questions.length}</h2>
    </div>
    <div className="col-sm-6">
      <Link to="/" style={{color: 'black', textDecoration: 'none' }} ><h1 className="small-title display-2" onClick={reset}>Art Quiz</h1></Link>
    </div>
    <div className="col-sm">
      <h2>score: {points} points</h2>
    </div>
  </div>)
}


