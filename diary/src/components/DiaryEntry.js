import React from 'react';

class DiaryEntry extends React.Component {

  state = {
    answer: this.props.answer.title
  }

  handleChange = (e) => {
    this.setState({
      answer: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createEntry(this.state.answer)
  }

  render() {
    return (
      <div className="new-entry">
        <form onSubmit={this.handleSubmit}>
          <h4 id="selected-question">{this.props.question.title}</h4>
          <div className="row">
            <div className="input-field col s10">
              <input id="title" type="text" className="validate" autocomplete="off" value={this.state.answer} onChange={this.handleChange}/>
            </div>
            <div className="col s2">
              <button class="btn waves-effect waves-light btn-large" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default DiaryEntry
