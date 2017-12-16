import React, { Component } from 'react';
import './App.css';
import moment from 'moment'

import QuestionPicker from './components/QuestionPicker'
import DiaryEntry from './components/DiaryEntry'
import Entries from './components/Entries'

class App extends Component {
  state = {
    questions: [],
    selectedQuestion: "",
    lastFiveEntries: [],
    body: 'entries',
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
    this.setState({
      selectedQuestion: q,
      body: 'entry form'
    })
  }

  answerQuestion = () => {
    fetch('http://localhost:3000/questions')
      .then(res => res.json())
      .then(json => this.setState({ questions: json, body: 'pick question' }))
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

    console.log(url)
    console.log(method)

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

  getBody = () => {
    if (this.state.body === 'entries') {
      return <Entries lastFive={this.state.lastFiveEntries} answerQuestion={this.answerQuestion} editEntry={this.editEntry}/>
    } else if (this.state.body === 'pick question') {
      return <QuestionPicker questions={this.state.questions} setQuestion={this.setQuestion}/>
    } else if (this.state.body === 'entry form'){
      return <DiaryEntry createEntry = {this.createEntry} question={this.state.selectedQuestion} answer={this.state.entryToEdit} />
    }
  }

  render() {
    let main = this.getBody()
    console.log(this.state)
    return (
      <div>
        <nav className="pink">
          <div className="nav-wrapper">
            <h6 className="brand-logo center">Daily Diary</h6>
          </div>
        </nav>
        <div className="container">
          <h1 id="date">Today is {moment().format('MMM Do YY')}</h1>
          {main}
        </div>
      </div>
    );
  }
}

export default App;
