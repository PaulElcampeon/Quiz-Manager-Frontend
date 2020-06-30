import React,  { useState, useEffect } from 'react';
import QuizQuestion from './QuizQuestion';
import { useSelector } from 'react-redux';

const QuizItem = (props) => {
    var { title, questions , onClose} = props;

    const storeExtractor = useSelector(store => store);

    const { permLv } = storeExtractor.token;
   
    questions = [
        {"title": "What is the capital of england", answers:[{answer:"damien", isAnswer: false}, {answer:"damien", isAnswer: false}, {answer:"damien", isAnswer: true}]},
        {"title": "How many dogs does ben have", answers:[{answer:"damien", isAnswer: true}, {answer:"damien", isAnswer: false}, {answer:"damien", isAnswer: true}]},
        {"title": "What make is the gold gti", answers:[{answer:"damien", isAnswer: true}, {answer:"damien", isAnswer: false}, {answer:"damien", isAnswer: true}]},
        {"title": "How many icecreams make a van van", answers:[{answer:"damien", isAnswer: false}, {answer:"damien", isAnswer: true}, {answer:"damien", isAnswer: true}]},
        {"title": "How many icecreams make a van van", answers:[{answer:"damien", isAnswer: false}, {answer:"damien", isAnswer: true}, {answer:"damien", isAnswer: true}]},
        {"title": "How many icecreams make a van van", answers:[{answer:"damien", isAnswer: false}, {answer:"damien", isAnswer: true}, {answer:"damien", isAnswer: true}]},
        {"title": "How many icecreams make a van van", answers:[{answer:"damien", isAnswer: false}, {answer:"damien", isAnswer: true}, {answer:"damien", isAnswer: true}]},
        {"title": "How many icecreams make a van van", answers:[{answer:"damien", isAnswer: false}, {answer:"damien", isAnswer: true}, {answer:"damien", isAnswer: true}]}

    ]
    // const [count, setCount] = useState(0);

    // // Similar to componentDidMount and componentDidUpdate:
    // useEffect(() => {
    //   // Update the document title using the browser API
    //   document.title = `You clicked ${count} times`;
    // });

    const save = () => {
        console.log("save")
    }

    const close = () => {
        onClose()
    }

    const edit = () => {
        console.log("edit")
    }

    const remove = () => {
        console.log("remove")
    }

    return (
        <div className="quiz_item">
            <h1 className="quiz_title">{title}</h1>
            <div className="quiz_questions_holder">
                {questions.map((element, index) => <QuizQuestion key={index} {...element} />)}
            </div>
            {permLv === 3? <button className="quizItemBtn" onClick={edit}>EDIT</button> : ""}
            {permLv === 3? <button className="quizItemBtn" onClick={save}>SAVE</button> : ""}
            {permLv === 3? <button className="quizItemBtn" onClick={remove}>REMOVE</button> : ""}
            <button className="quizItemBtn" onClick={close}>CLOSE</button>
        </div>
    )
}

export default QuizItem;