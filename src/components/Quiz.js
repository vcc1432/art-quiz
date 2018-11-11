import * as React from 'react'


export default function Quiz(props) {
  return (
  <div className="row text-center">
    <div class="col">
      <h2>question</h2>
      <h1>{props.getNumber()}</h1>
      <h3>of 10</h3>
    </div>
    <div className="col-6">
      <h1 className="display-2">Art Quiz</h1>
    </div>
    <div className="col">
      <h2>Score</h2>
      <h1>{props.points}</h1>
      <h3>Points</h3>
    </div>
  </div>)
}


