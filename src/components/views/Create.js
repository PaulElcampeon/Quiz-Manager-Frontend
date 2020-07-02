import React, { useState } from 'react';
import CreateQuestion from '../items/CreateQuestion';
import { useSelector, useDispatch } from 'react-redux';
import { createQuiz } from '../../store/actions';

const Create = (props) => {

    //Redux tools
    const dispatch = useDispatch();
    const storeExtractor = useSelector(store => store);
    const { token } = storeExtractor;

    //Managing local component state
    const [quiz, updateQuiz] = useState({ title: "", questions: [] });
    const [title, updateTitle] = useState("");
    const [questions, updateQuestions] = useState([]);

    const handleOnAdd = () => {
        const updatedQuizQuestions = questions.concat({ question: "", answers: [] })
        updateQuestions(updatedQuizQuestions);
        quiz.questions = updatedQuizQuestions;
        updateQuiz(quiz);
    }

    const handleOnChange = (e) => {
        updateTitle(e.target.value);
        quiz.title = e.target.value;
        updateQuiz(quiz);
    }

    const updateQuestion = (question, questionIndex) => {
        const updatedQuestions = quiz.questions.map((element, index) => {
            if (index === questionIndex) return question;
            return element
        })

        updateQuestions(updatedQuestions);
        quiz.questions = updatedQuestions;
        updateQuiz(quiz);
    }

    const removeQuestion = (questionIndex) => {
        const newQuizQuestions = questions.filter((element, index) => index !== questionIndex);
        quiz.questions = newQuizQuestions;
        updateQuestions(newQuizQuestions);
        updateQuiz(quiz);
    }

    const saveQuiz = () => {
        dispatch(createQuiz({ quiz: { quizTitle: title, questions: questions }, token: token.token }))
        props.history.push("/quizzes");
    }

    return (
        <div className="create-view-holder">
            <input className="create-title" type="text" value={title} placeholder="Quiz Title" onChange={handleOnChange} />
            <div className="create-questions-holder">
                {questions.length > 0 ? questions.map((element, index) => <CreateQuestion key={index} index={index} removeQuestion={removeQuestion} updateQuestion={updateQuestion} {...element} />) : ""}
            </div>
            <div className="create-button-holder">
                <button className="create-button" onClick={handleOnAdd}>ADD QUESTION</button>
            </div>
            <div className="create-button-holder">
                <button className="create-button" onClick={saveQuiz}>SAVE</button>
            </div>
        </div>
    )
}

export default Create;