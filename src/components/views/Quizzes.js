import React, { useState } from 'react';
import QuizListItem from '../items/QuizListItem';
import { useSelector } from 'react-redux';
import QuizItem from '../items/QuizItem';

const Quizzes = (props) => {

    //Redux tools
    const storeExtractor = useSelector(store => store);
    const { quizzes } = storeExtractor;

    //Managing local component state
    const [showQuizItem, setShowQuizItem] = useState(false);
    const [quizItem, setQuizItem] = useState(null);

    return (
        <div className="quizzes">
            <div className="quizzes_holder">
                {quizzes.map((element, index) =>
                    <QuizListItem key={index} {...element}
                        onClick={() => {
                            setQuizItem({ quizItem: element, index: index });
                            setShowQuizItem(true);
                        }} />)}
            </div>
            {showQuizItem ? <QuizItem onClose={() => { setShowQuizItem(false) }} {...quizItem} /> : ""}
        </div>
    )
}

export default Quizzes;