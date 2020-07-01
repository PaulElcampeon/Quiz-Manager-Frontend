import React, { useState, useEffect } from 'react';
import QuizListItem from '../items/QuizListItem';
import { useSelector } from 'react-redux';
import QuizItem from '../items/QuizItem';

const Quizzes = (props) => {
    const storeExtractor = useSelector(store => store);
    const { quizzes } = storeExtractor;
    const [currentQuizzes, updateQuizzes] = useState(quizzes);
    const [showQuizItem, setShowQuizItem] = useState(false);
    const [quizItem, setQuizItem] = useState(null);

    const updateQuizzesToCurrent = () => {
        updateQuizzes(storeExtractor.quizzes)
    }

    return (
        <div className="quizzes">
            <div className="quizzes_holder">
                {quizzes.map((element, index) =>
                    <QuizListItem key={index} {...element}
                        onClick={() => {
                            setQuizItem({quizItem: element, index: index});
                            setShowQuizItem(true);
                        }} />)}
            </div>
            {showQuizItem ? <QuizItem onClose={() => { setShowQuizItem(false) }} {...quizItem} updateQuizzes={updateQuizzesToCurrent}/> : ""}
        </div>
    )
}

export default Quizzes;