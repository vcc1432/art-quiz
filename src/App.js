import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import QuizContainer from './components/QuizContainer'


class App extends Component {
  render() {
    return (
      <Router>
        <header className="masthead d-flex">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quiz" component={QuizContainer} />
            <Route component={() => (<Redirect to="/" />)} />
          </Switch>
        </header>
      </Router>
    );
  }
}

export default App;
