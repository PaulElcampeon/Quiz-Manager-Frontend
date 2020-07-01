import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const QuizAnswer = (props) => {
    const { answer, isAnswer, editeModeEnabled, onRemove, onChange, index } = props;
    const storeExtractor = useSelector(store => store);
    const [currentAnswer, setAnswer] = useState(answer);
    const [currentIsAnswer, setIsAnswer] = useState(isAnswer);
    const { permLv } = storeExtractor.token;
    const shouldShowAnswer = isAnswer && permLv >= 2;

    const handleChange = (e) => {
        console.log(e.target.value)
        setAnswer(e.target.value)
        onChange({answer:e.target.value, isAnswer:currentIsAnswer}, index);
    }

    const handleChecked = (e) => {
        setIsAnswer(e.target.checked)
        onChange({answer:currentAnswer, isAnswer:e.target.checked}, index);
    }

    return (
        <div>
            {!editeModeEnabled ?
                <div className="quiz_answer">
                    {shouldShowAnswer ? <input className="input_disabled" type="checkbox" checked readOnly/> : <input type="checkbox" className="input_disabled" readOnly/>}
                    <input className="input_disabled answer_input" type="text" value={currentAnswer} readOnly/>
                </div>
                :
                <div className="quiz_answer">
                    <input type="checkbox" onChange={(e) => handleChecked(e)} checked={currentIsAnswer ? 'checked' : ''}/>
                    <input className="answer_input" type="text" value={currentAnswer} onChange={(e) => handleChange(e)}/>
                    <input className="removeBtn" type="button" value="REMOVE" onClick={onRemove}/>
                </div>}
        </div>
    )
}

export default QuizAnswer