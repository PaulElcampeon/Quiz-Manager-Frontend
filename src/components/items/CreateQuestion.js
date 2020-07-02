import React, { useState } from 'react';
import CreateAnswer from './CreateAnswer';

const CreateQuestion = (props) => {
    const { question, answers, index, updateQuestion, removeQuestion } = props;

    //Managing local component state
    const [updatedQuestion, setQuestion] = useState(question);
    const [updatedAnswers, setAnswers] = useState(answers);

    const handleChange = (e) => {
        const newQuestion = e.target.value;
        setQuestion(newQuestion);
        updateQuestion({ question: newQuestion, answers: updatedAnswers }, index);
    }

    const addAnswer = () => {
        if (updatedAnswers.length > 4) return;
        const newUpdatedAnswers = updatedAnswers.concat({ answer: "", isAnswer: false });
        setAnswers(newUpdatedAnswers);
        updateQuestion({ question: updatedQuestion, answers: newUpdatedAnswers }, index);
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
        updateQuestion({ question: updatedQuestion, answers: newUpdatedAnswers }, index);
    }

    return (
        <div className="create-question-holder">
            <input className="answer_input" type="text" value={question} placeholder="Quiz Question" onChange={(e) => handleChange(e)} />
            {answers.map((element, index) => <CreateAnswer key={index} index={index} onUpdateAnswer={onChangeAnswer} onRemove={removeAnswer} {...element} />)}
            <button className="create-add-answer" onClick={addAnswer}>ADD ANSWER</button>
            <button className="create-add-answer" onClick={() => removeQuestion(index)}>REMOVE QUESTION</button>
        </div>
    )
}

export default CreateQuestion;