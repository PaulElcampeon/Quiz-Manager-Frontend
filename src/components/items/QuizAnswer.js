import React from 'react';
import { useSelector } from 'react-redux';


const QuizAnswer = (props) => {
    const { answer, isAnswer } = props;

    const storeExtractor = useSelector(store => store);

    const {permLv} = storeExtractor.token;
    
    // const shouldShowAnswer = isAnswer && permLv >= 2;
    const shouldShowAnswer = true;

    return (
        <div className="quiz_answer">
            {shouldShowAnswer ? <input className="input_disabled" type="checkbox" checked/> :  <input type="checkbox" className="input_disabled"/>}
            <input className="input_disabled answer_input" type="text" value={answer}/>
            {permLv >= 3 ? <input className="removeBtn" type="button" value="REMOVE"/>: ""}
        </div>
    )
}

export default QuizAnswer