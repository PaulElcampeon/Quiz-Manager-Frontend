import React, { useState, useEffect } from 'react';
import CreateQuestion from '../items/CreateQuestion';

const Create = () => {

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
        
        quiz.questions = updatedQuestions;
        
        updateQuiz(quiz);
    }

    const saveQuiz = () => {
        
    }

    return (
        <div>
            <input type="text" value={title} placeholder="Quiz Title" onChange={handleOnChange} />
            <div>
                {questions.length > 0 ? questions.map((element, index) => <CreateQuestion key={index} index={index} updateQuestion={updateQuestion} {...element} />) : ""}
            </div>
            <div>
                <button onClick={handleOnAdd}>ADD QUESTION</button>
            </div>
            <div>
                <button onClick={saveQuiz}>SAVE</button>
            </div>
        </div>
    )
}

export default Create;