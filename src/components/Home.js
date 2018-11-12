import * as React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Home() {
  return (
    <div class="container text-center my-auto">
      <h1 class="quiz-title my-4">ART QUIZ</h1>
     <Link to="/quiz" style={{ textDecoration: 'none' }}> <button type="button" class="btn btn-danger btn-lg">Play »</button></Link>
    </div>)
}