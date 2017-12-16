import React from 'react';

const QuestionPicker = (props) => {
  let questions = props.questions.map((q, i) => {
    return (
      <div key={i} className="question" onClick={() => {props.setQuestion(q)}}><p>{q.title}</p><br /></div>
    )
  })


  return (
    <div className="questions">
      <p>Pick Your Question</p>
      {questions}
    </div>
  )

}

export default QuestionPicker
