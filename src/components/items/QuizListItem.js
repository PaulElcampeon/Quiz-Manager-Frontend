import React from 'react';

const QuizListItem = (props) => {
    const { quizTitle, onClick} = props

    return (
        <div className="quizListItem_holder">
            <button className="quizListBtn" onClick={onClick}>{quizTitle}</button>
        </div>
    )
}

export default QuizListItem;