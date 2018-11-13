import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import QuizContainer from './components/QuizContainer'
import LearnMore from './components/LearnMore'


class App extends Component {
  render() {
    return (
      <Router>
        <header className="masthead d-flex">
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={QuizContainer} />
          <Route exact path="/learn" component={LearnMore} />
        </header>
      </Router>
    );
  }
}

export default App;
