import React, { useEffect } from 'react';
import './styles/app.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Landing from './components/views/Landing';
import Quizzes from './components/views/Quizzes';
import Login from './components/views/Login';
import Create from './components/views/Create';
import Navbar from './components/items/Navbar';
import { ProtectedRoute } from './components/items/ProtectedRoute';
import { updateAllQuizzesInStore } from './store/actions';

function App() {

  const dispatch = useDispatch();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    dispatch(updateAllQuizzesInStore(quizzes))
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => {
            return <Redirect to={"/home"} />
          }} />
          <Route exact path="/home" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/quizzes" component={Quizzes} />
          <Route exact path="/create" component={Create} />
          {/* <ProtectedRoute exact path="/quizzes" component={Quizzes} /> */}
          {/* <ProtectedRoute exact path="/create" component={Create} />
          <Route path="*" component={() => "404 NOT FOUND"} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


const quizzes =
  [
    {
      title: "subaraus",
      questions:
        [
          {
            question: "What is the capital of england",
            answers: [{ answer: "deee", isAnswer: false }, { answer: "rage", isAnswer: false }, { answer: "deon", isAnswer: true }]
          },
          {
            question: "How many dogs does ben have",
            answers: [{ answer: "raf", isAnswer: true }, { answer: "damien", isAnswer: false }, { answer: "damien", isAnswer: true }]
          },
          {
            question: "What make is the gold gti",
            answers: [{ answer: "dww", isAnswer: true }, { answer: "stimp", isAnswer: false }, { answer: "rebecca", isAnswer: true }]
          },
          {
            question: "How many icecreams make a van van",
            answers: [{ answer: "damien", isAnswer: false }, { answer: "rabbit", isAnswer: true }, { answer: "wow", isAnswer: true }]
          },
          {
            question: "How many icecreams make a van van",
            answers: [{ answer: "sanches", isAnswer: false }, { answer: "dsasd", isAnswer: true }, { answer: "damien", isAnswer: true }]
          },
          {
            question: "How many icecreams make a van van",
            answers: [{ answer: "jamie", isAnswer: false }, { answer: "lefg", isAnswer: true }, { answer: "kimberly", isAnswer: true }]
          },
          {
            question: "How many icecreams make a van van",
            answers: [{ answer: "jose", isAnswer: false }, { answer: "damien", isAnswer: true }, { answer: "damien", isAnswer: true }]
          },
          {
            question: "How many icecreams make a van van",
            answers: [{ answer: "damien", isAnswer: false }, { answer: "able", isAnswer: true }, { answer: "kane", isAnswer: true }]
          }
        ]
    },
    {
      title: "nabura",
      questions:
        [
          {
            question: "What is the capital of england",
            answers: [{ answer: "deee", isAnswer: false }, { answer: "rage", isAnswer: false }, { answer: "deon", isAnswer: true }]
          },
          {
            question: "How many dogs does ben have",
            answers: [{ answer: "raf", isAnswer: true }, { answer: "damien", isAnswer: false }, { answer: "damien", isAnswer: true }]
          },
          {
            question: "What make is the gold gti",
            answers: [{ answer: "dww", isAnswer: true }, { answer: "stimp", isAnswer: false }, { answer: "rebecca", isAnswer: true }]
          },
          {
            question: "How many icecreams make a van van",
            answers: [{ answer: "damien", isAnswer: false }, { answer: "rabbit", isAnswer: true }, { answer: "wow", isAnswer: true }]
          },
          {
            question: "How many icecreams make a van van",
            answers: [{ answer: "sanches", isAnswer: false }, { answer: "dsasd", isAnswer: true }, { answer: "damien", isAnswer: true }]
          },
          {
            question: "How many icecreams make a van van",
            answers: [{ answer: "jamie", isAnswer: false }, { answer: "lefg", isAnswer: true }, { answer: "kimberly", isAnswer: true }]
          },
          {
            question: "How many icecreams make a van van",
            answers: [{ answer: "jose", isAnswer: false }, { answer: "damien", isAnswer: true }, { answer: "damien", isAnswer: true }]
          },
          {
            question: "How many icecreams make a van van",
            answers: [{ answer: "damien", isAnswer: false }, { answer: "able", isAnswer: true }, { answer: "kane", isAnswer: true }]
          }
        ]
    }

  ]