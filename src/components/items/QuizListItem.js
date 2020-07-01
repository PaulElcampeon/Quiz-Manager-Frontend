import React from 'react';

const QuizListItem = (props) => {
    const { title, onClick} = props

    return (
        <div className="quizListItem_holder">
            <button className="quizListBtn" onClick={onClick}>{title}</button>
        </div>
    )
}

export default QuizListItem;