import React, { useState, useEffect } from 'react';
import CreateAnswer from './CreateAnswer';

const CreateQuestion = (props) => {
    const { question, answers, index, updateQuestion } = props;

    const [updatedQuestion, setQuestion] = useState(question);

    const [updatedAnswers, setAnswers] = useState(answers);
    
    const handleChange = (e) => {
        
        const newQuestion = e.target.value;

        setQuestion(newQuestion);

        updateQuestion({ question: updatedQuestion, answers: updatedAnswers }, index);
    }

    const addAnswer = () => {

        if (updatedAnswers.length > 4) return;

        const newUpdatedAnswers = updatedAnswers.concat({ answer: "", isAnswer: false });

        setAnswers(newUpdatedAnswers);

        updateQuestion({ question: updatedQuestion, answers: updatedAnswers }, index);
    }

    const removeAnswer = (indexOfAnswer) => {

        const newUpdatedAnswers = updatedAnswers.filter((element, index) => index !== indexOfAnswer);

        newUpdatedAnswers.forEach(element => console.log(element));

        setAnswers(newUpdatedAnswers);

        updateQuestion({ question: updatedQuestion, answers: newUpdatedAnswers }, index);
    }

    const onChangeAnswer = (answer, indexOfAnswer) => {
        const newUpdatedAnswers = updatedAnswers.map((element, index) => {
            if (index === indexOfAnswer) return answer;
            return element;
        });

        setAnswers(newUpdatedAnswers);

        updateQuestion({ question: updatedQuestion, answers: updatedAnswers }, index);
    }

    return (
        <div>
            <input className="answer_input" type="text" value={updatedQuestion} placeholder="Quiz Question" onChange={(e) => handleChange(e)} />
            {updatedAnswers.map((element, index) => <CreateAnswer key={index} index={index} onUpdateAnswer={onChangeAnswer} onRemove={removeAnswer} {...element} />)}
            <button className="quiz_question_holder_add" onClick={addAnswer}>ADD ANSWER</button>
        </div>
    )
}

export default CreateQuestion;