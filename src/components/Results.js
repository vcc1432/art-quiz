import * as React from 'react'
import { Link } from 'react-router-dom'


export default function Quiz(props) {
  const { questions, points, loadQuestion } = props
  return (
  <div className="text-center">
    <h2>You have scored {points} out of a total of {questions.length} points!</h2>

    {points/questions.length <= 0.5 &&
      <div>
        <p>Frida would not approve!</p>
        <img className="img-fluid" src="https://media.giphy.com/media/gVJKzDaWKSETu/giphy.gif" alt="Frida-Kahlo-does-not-approve"/> 
      </div>}

    {points/questions.length > 0.5 &&
      <div>
      <p>Well done! Here are some medieval monkeys playing musical instruments.</p>
      <img className="gif mx-auto img-fluid" src="https://media.giphy.com/media/3o6fJ8bcDsEs4SL8yY/giphy.gif" alt="medieval-instruments-played-by-monkeys"/> 
    </div>}

    <Link to="/quiz" style={{ textDecoration: 'none' }}><button type="button" class=" play-again btn btn-danger btn-lg mx-auto" onClick={() => loadQuestion(questions)}>Play again »</button></Link>

  </div>)
}


