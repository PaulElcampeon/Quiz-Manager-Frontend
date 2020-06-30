import { combineReducers } from 'redux';
import loggedInReducer from './loggedInReducer';
import messageReducer from './messageReducer';
import tokenReducer from './tokenReducer';
import quizReducer from './quizReducer';
import loggingInReducer from './loggingInReducer';

const rootReducer = combineReducers({
    loggingIn: loggingInReducer,
    quizzes: quizReducer,
    loggedIn: loggedInReducer,
    genericMessage: messageReducer,
    token: tokenReducer
})

export default rootReducer;