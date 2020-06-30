import React from 'react';
import './styles/app.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from "react-redux";
import  Landing  from './components/views/Landing';
import Quizzes from './components/views/Quizzes';
import Login from './components/views/Login';
import Create from './components/views/Create';
import Navbar from './components/items/Navbar';
import { ProtectedRoute } from './components/items/ProtectedRoute';

function App() {
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

          {/* <ProtectedRoute exact path="/quizzes" component={Quizzes} /> */}
          {/* <ProtectedRoute exact path="/create" component={Create} />
          <Route path="*" component={() => "404 NOT FOUND"} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
