import React, { useState, useEffect } from 'react';
import QuizListItem from '../items/QuizListItem';
import { useSelector } from 'react-redux';
import QuizItem from '../items/QuizItem';

const Quizzes = (props) => {

    // const storeExtractor = useSelector(store => store);

    const [showQuizItem, setShowQuizItem] = useState(false);

    const [quizItem, setQuizItem] = useState(null);

    // // Similar to componentDidMount and componentDidUpdate:
    // useEffect(() => {
    //   // Update the document title using the browser API
    //   document.title = `You clicked ${count} times`;
    // });

    // const { quizzes } = storeExtractor;
    const quizzes = [
        { title: "misses" }, { title: "ewewewe ewew" }, { title: "wewe sds qe" },
        { title: "asdadawdawd" }, { title: "wdawadawdw a" }, { title: "awdawad dwadwa wda w" }, { title: "wdwdwd adwadawd" }, { title: "misses" },
        { title: "misssadasdes" }, { title: "miswdadwadawdses" }, { title: "adwadawd dawd aw wad" }, { title: "misses" }, { title: "misses" },
        { title: "misses" }, { title: "misses" }, { title: "misses" }, { title: "misses" }, { title: "misses" }, { title: "misses" },
        { title: "awdawdad awdwada dad" }, { title: "wadwda w adawdaw  awdw da" }, { title: "misses" }, { title: "misses" }, { title: "misses" }, { title: "misses" }
    ]

    return (
        <div className="quizzes">
            <div className="quizzes_holder">
                {quizzes.map((element, index) =>
                    <QuizListItem key={index} {...element}
                        onClick={() => {
                            setQuizItem(element);
                            setShowQuizItem(true);
                        }} />)}
            </div>
            {showQuizItem ? <QuizItem onClose={() => { setShowQuizItem(false) }} {...quizItem} /> : ""}
        </div>
    )
}

export default Quizzes;