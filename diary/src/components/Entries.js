import React from 'react'
import moment from 'moment'


class Entries extends React.Component {
  today = () => {
    const todaysDate = moment().format('YYYY-MM-D')
    const todaysEntry = this.props.lastFive.filter(entry => {
      return entry.created_at.slice(0, 10) === todaysDate
    })
    if (todaysEntry.length > 0) {
      return (
        <div  className="entry">
          <small>{todaysEntry[0].created_at.slice(0, 10)}</small>
          <h4>{todaysEntry[0].question.title}</h4>
          <p>{todaysEntry[0].title}</p>
          <button className="waves-effect waves-light btn pink" onClick={() => this.props.editEntry(todaysEntry[0])}>Edit Your Response</button>
        </div>
      )
    } else {
      return <button className="waves-effect waves-light btn pink" onClick={this.props.answerQuestion}>Answer A Question About Today</button>
    }
  }

  lastFive = () => {
    return this.props.lastFive.map(entry => {
      return (
        <div className="entry">
          <small>{entry.created_at.slice(0, 10)}</small>
          <h4>{entry.question.title}</h4>
          <p>{entry.title}</p>
        </div>
      )
    })
  }


  render() {
    const today = this.today();
    const entries = this.lastFive();
    console.log(today)
    return (
      <div className="entries">
        <div className="today">
          {today}
        </div>
        <h4 className="white-text">Your Last 5 Entries</h4>
        <div className="last-five-entries">
        {entries.length > 0 ? entries : <p>None!</p>}
        </div>
      </div>
    )
  }
}

Entries.defaultProps = {
  lastFive: []
}

export default Entries
