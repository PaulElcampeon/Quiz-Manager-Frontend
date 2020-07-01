import React, { useState } from 'react';
import QuizAnswer from './QuizAnswer';

const QuizQuestion = (props) => {
    const { question, answers, editeModeEnabled, updateQuiz, index } = props;

    const [currentAnswers, setAnswers] = useState(answers);

    const removeAnswer = (indexOfAnswer) => {
        const newAnswers = currentAnswers.filter((element, index) => index !== indexOfAnswer);
        setAnswers(newAnswers);
        updateQuiz({ question: question, answers: newAnswers }, index)
    }

    const addAnswer = () => {
        const newAnswers = currentAnswers.concat({ answer: "", isAnswer: false });
        setAnswers(newAnswers);
        updateQuiz({ question: question, answers: newAnswers }, index)
    }

    const modifyAnswer = (answer, indexOfAnswer) => {
        const newAnswers = currentAnswers.map((element, index) => {
            if (index === indexOfAnswer) return answer;
            return element;
        });
        setAnswers(newAnswers);
        updateQuiz({ question: question, answers: newAnswers }, index)
    }

    return (
        <div className="quiz_question_holder">
            <h1 className="quiz_question_title">{question}</h1>
            <div className="quiz_question_answers_holder">
                {currentAnswers.map((element, index) => <QuizAnswer key={index} editeModeEnabled={editeModeEnabled} index={index} {...element} onChange={modifyAnswer} onRemove={() => removeAnswer(index)} />)}
            </div>
            {editeModeEnabled && currentAnswers.length <= 4 ? <button className="quiz_question_holder_add" onClick={addAnswer}>ADD</button> : ""}
        </div>
    )
}

export default QuizQuestion;