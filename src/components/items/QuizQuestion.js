import React from 'react';
import QuizAnswer from './QuizAnswer';

const QuizQuestion = (props) => {
    const { title, answers } = props;

    return (
        <div className="quiz_question_holder">
            <h1 className="quiz_question_title">{title}</h1>
            <div className="quiz_question_answers_holder">
                {answers.map((element, index) => <QuizAnswer key={index} {...element} />)}
            </div>
        </div>
    )
}

export default QuizQuestion;