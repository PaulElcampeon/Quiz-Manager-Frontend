import React, { useState, useEffect } from 'react';
import QuizQuestion from './QuizQuestion';
import { useSelector, useDispatch } from 'react-redux';
import { updateOneQuizInStore, deleteQuizInStore } from '../../store/actions'

const QuizItem = (props) => {
    const { quizItem, onClose, index, updateQuizzes } = props;
    const { title, questions} = quizItem;
    const storeExtractor = useSelector(store => store);
    const dispatch = useDispatch();
    const [editeModeEnabled, setEditMode] = useState(false);
    const [quiz, setQuiz] = useState({ title: title, questions: questions });
    const [updatedQuestions, setQuestions] = useState(questions);
    const permLv = 3;

    const save = () => {
        dispatch(updateOneQuizInStore({quiz: quiz, index: index}))
        updateQuizzes();
        close();
    }

    const close = () => {
        onClose()
    }

    const edit = () => {
        setEditMode(true);
    }

    const remove = () => {
        dispatch(deleteQuizInStore(index));
        updateQuizzes();
        close();
    }

    const updateQuiz = (quizQuestion, indexOfQuestion) => {
        quiz.questions = quiz.questions.map((element, index) => {
            if (index === indexOfQuestion) return quizQuestion;
            return element;
        })

        setQuestions(quiz.questions);
        setQuiz(quiz);
        updateQuizzes();
    }

    return (
        <div className="quiz_item_holder">
            <div className="quiz_item">
                <h1 className="quiz_title">{title}</h1>
                <div className="quiz_questions_holder">
                    {updatedQuestions.map((element, index) => <QuizQuestion key={index} editeModeEnabled={editeModeEnabled} {...element} index={index} updateQuiz={updateQuiz}/>)}
                </div>
            </div>
            <div className="quiz_item_buttons_holder">
                {permLv === 3 ? <button className="quizItemBtn" onClick={edit}>EDIT</button> : ""}
                {permLv === 3 ? <button className="quizItemBtn" onClick={save}>SAVE</button> : ""}
                {permLv === 3 ? <button className="quizItemBtn" onClick={remove}>REMOVE</button> : ""}
                <button className="quizItemBtn" onClick={close}>CLOSE</button>
            </div>
        </div >
    )
}

export default QuizItem;