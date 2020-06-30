import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import loginMiddleware from './middleware/loginMiddleware';
import logoutMiddleware from './middleware/logoutMiddleware';
import quizMiddleware from './middleware/quizMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(loginMiddleware, logoutMiddleware, quizMiddleware)
));

export default store;