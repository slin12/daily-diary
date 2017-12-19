import React, { Component } from 'react';
import './App.css';
import moment from 'moment'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import QuestionPicker from './components/QuestionPicker'
import DiaryEntry from './components/DiaryEntry'
import Entries from './components/Entries'

class App extends Component {
  state = {
    questions: [],
    selectedQuestion: "",
    lastFiveEntries: [],
    entryToEdit: null
  }

  componentDidMount() {
    this.getLastFive()
  }

  getLastFive() {
    fetch('http://localhost:3000/entries')
      .then(res => res.json())
      .then(json => this.setState({ lastFiveEntries: json }))
  }

  setQuestion = (q) => {
    console.log('setting title...')
    this.setState({
      selectedQuestion: q
    })
  }

  answerQuestion = () => {
    fetch('http://localhost:3000/questions')
      .then(res => res.json())
      .then(json => this.setState({ questions: json }))
  }

  createEntry = (answer) => {
    let url;
    let method;

    if (this.state.entryToEdit) {
      url = `http://localhost:3000/entries/${this.state.entryToEdit.id}`
      method = 'PATCH'
    } else {
      url = 'http://localhost:3000/entries'
      method = 'post'
    }

    fetch(url, {
      method: method,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'entry': {'answer': answer, 'question': this.state.selectedQuestion}})
    })
      .then(res => res.json())
      .then(json => {
        this.getLastFive();
        this.setState({body: 'entries'})
      })
  }

  editEntry = (entry) => {
    this.setState({
      body: 'entry form',
      selectedQuestion: entry.question,
      entryToEdit: entry
    })
  }

  render() {
    console.log(this.state)
    return (
      <Router>
        <div>
            <div>
              <nav className="pink">
                <div className="nav-wrapper">
                  <h6 className="brand-logo center">Daily Diary</h6>
                </div>
              </nav>
              <div className="container">
                <h1 id="date">Today is {moment().format('MMM Do YY')}</h1>
              </div>
            </div>
        <Route exact path="/" render={() => <Entries lastFive={this.state.lastFiveEntries} answerQuestion={this.answerQuestion} editEntry={this.editEntry} />} />
        <Route exact path="/questions/new" render={() => <QuestionPicker questions={this.state.questions} setQuestion={this.setQuestion}/>} />
        <Route exact path="/entries/new" render={() => <DiaryEntry createEntry = {this.createEntry} question={this.state.selectedQuestion} answer={this.state.entryToEdit} />} />
        </div>
      </Router>
    );
  }
}

export default App;
