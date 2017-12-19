import React from 'react';
import { Link } from 'react-router-dom'

class DiaryEntry extends React.Component {

  state = {
    answer: ""
  }

  componentDidMount() {
    if (this.props.answer) {
      this.setState({
        answer: this.props.answer.title
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      answer: e.target.value
    })
  }

  handleSubmit = (e) => {
    // e.preventDefault()
    this.props.createEntry(this.state.answer)
  }

  render() {
    console.log('diary entry mounted!', this.state)
    return (
      <div className="new-entry container">
        <form>
          <h4 id="selected-question">{this.props.question.title}</h4>
          <div className="row">
            <div className="input-field col s10">
              <input id="title" type="text" className="validate" autocomplete="off" value={this.state.answer} onChange={this.handleChange}/>
            </div>
            <div className="col s2">
              <Link to="/" class="btn waves-effect waves-light btn-large" onClick={this.handleSubmit}>Submit
                <i class="material-icons right">send</i>
              </Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default DiaryEntry
