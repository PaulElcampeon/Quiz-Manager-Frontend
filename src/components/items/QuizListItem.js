import React from 'react';
// import QuizItem from './QuizItem';

const QuizListItem = (props) => {
    const { title, onClick} = props

    // const onClick = (e) => {
    //     return (
    //         <QuizItem />
    //     )
    // }

    return (
        <div className="quizListItem_holder">
            <button className="quizListBtn" onClick={onClick}>{title}</button>
        </div>
    )
}

export default QuizListItem;