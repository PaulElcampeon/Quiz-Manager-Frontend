import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuizInDB, deleteQuiz } from '../../store/actions'

const QuizItem = (props) => {
    const { quizItem, onClose } = props;
    const { quizTitle, questions } = quizItem;

    //Redux tools
    const dispatch = useDispatch();
    const storeExtractor = useSelector(store => store);
    const { token } = storeExtractor;
    const permLv = token.permLv;
    const jwt = token.token;

    //Managing local component state
    const [editeModeEnabled, setEditMode] = useState(false);
    const [updatedQuestions, setQuestions] = useState(questions);

    const save = () => {
        quizItem.questions = updatedQuestions;
        dispatch(updateQuizInDB({ quiz: quizItem, token: jwt }))
        close();
    }

    const close = () => {
        onClose()
    }

    const edit = () => {
        setEditMode(true);
    }

    const remove = () => {
        dispatch(deleteQuiz({ quizId: quizTitle, token: jwt }));
        close();
    }

    const updateQuiz = (quizQuestion, indexOfQuestion) => {
        const newUpdatedQuestions = updatedQuestions.map((element, index) => {
            if (index === indexOfQuestion) return quizQuestion;
            return element;
        })

        setQuestions(newUpdatedQuestions);
    }

    const removeQuizQuestion = (indexOfQuestion) => {
        const newUpdateQuestions = updatedQuestions.filter((element, index) => index !== indexOfQuestion)
        setQuestions(newUpdateQuestions);
    }

    const addQuestion = () => {
        const newUpdateQuestions = updatedQuestions.concat({question:"", answers:[]})
        setQuestions(newUpdateQuestions);
    }

    return (
        <div className="quiz_item_holder">
            <div className="quiz_item">
                <h1 className="quiz_title">{quizTitle}</h1>
                <div className="quiz_questions_holder">
                    {updatedQuestions.map((element, index) => <QuizQuestion key={index} editeModeEnabled={editeModeEnabled} {...element} index={index} updateQuiz={updateQuiz} removeQuizQuestion={removeQuizQuestion} />)}
                </div>
            </div>
            <div className="quiz_item_buttons_holder">
                {editeModeEnabled ? <button className="quizItemBtn" onClick={addQuestion}>ADD QUESTION</button> : ""}
                {permLv === 3 ? <button className="quizItemBtn" onClick={edit}>EDIT</button> : ""}
                {permLv === 3 ? <button className="quizItemBtn" onClick={save}>SAVE</button> : ""}
                {permLv === 3 ? <button className="quizItemBtn" onClick={remove}>REMOVE</button> : ""}
                <button className="quizItemBtn" onClick={close}>CLOSE</button>
            </div>
        </div >
    )
}

export default QuizItem;