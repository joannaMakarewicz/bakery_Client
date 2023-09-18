import React from 'react';
import "./Feedback.scss";

type FeedbackProps =  {
  authorName: string,
  text:string,
}

const Feedback = ({authorName, text}:FeedbackProps) => {
  return (
<div className="feedback card">
  <div className="feedback__container card-body">
    <h5 className="feedback__author card-title">{authorName}</h5>
    <p className="feedback__text card-text">"{text}"</p>
  </div>
</div>
  )
}

export default Feedback;
