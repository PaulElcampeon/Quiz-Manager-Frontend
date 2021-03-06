import React, { useState } from 'react';


const CreateAnswer = (props) => {
    const { onRemove, onUpdateAnswer, index, answer, isAnswer } = props;

    //Managing local component state
    const [currentIsAnswer, updateIsAnswer] = useState(isAnswer);

    return (
        <div className="create-answer-section">
            <input type="checkbox" onChange={(e) => {
                const tempIsAnswer = !currentIsAnswer
                updateIsAnswer(tempIsAnswer);
                onUpdateAnswer({ answer: answer, isAnswer: tempIsAnswer }, index);
            }} checked={currentIsAnswer ? 'checked' : ''} />

            <input className="create-answer-input" type="text" value={answer} onChange={(e) => {
                onUpdateAnswer({ answer: e.target.value, isAnswer: currentIsAnswer }, index)
            }} />
            <input className="create-remove-answer" type="button" value="REMOVE" onClick={() => onRemove(index)} />
        </div>
    )
}

export default CreateAnswer;