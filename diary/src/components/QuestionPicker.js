import React from 'react';
import { Link } from 'react-router-dom'

const QuestionPicker = (props) => {
  let questions = props.questions.map((q, i) => {
    return (
      <Link key={i} className="question" to="/entries/new" onClick={() => {props.setQuestion(q)}}>{q.title}</Link>
    )
  })

  console.log(props)

  return (
    <div className="questions container">
      <p>Pick Your Question</p>
      {questions}
    </div>
  )

}

export default QuestionPicker
