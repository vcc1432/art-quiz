import * as React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div className="container shadow p-3 bg-white">
      <div class="card" style={{width: "18rem"}}>
        <img class="card-img-top" src=".../100px180/" alt="Card cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on th card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>)
}