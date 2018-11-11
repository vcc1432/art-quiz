import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import QuizContainer from './components/QuizContainer'


class App extends Component {
  render() {
    return (
      <Router>
        <header class="masthead d-flex">
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={QuizContainer} />
        </header>
      </Router>
    );
  }
}

export default App;
