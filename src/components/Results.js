import * as React from 'react'
import { Link } from 'react-router-dom'
import { loadQuestion } from '../actions/questions';


export default function Quiz(props) {
  return (
  <div>
    <h2>You have scored {props.points} out of a total of {props.questions.length} points!</h2>
    {props.points < 5 &&
    <div>
      <p>Now that's not very good, is it? Frida would not approve!</p>
      <img className="img-fluid" src="https://media.giphy.com/media/gVJKzDaWKSETu/giphy.gif" alt="Frida-Kahlo-does-not-approve"/> 
    </div>}

    <Link to="/quiz" style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger btn-lg" onClick={loadQuestion(props.questions)}>Play again »</button></Link>
  </div>)
}


