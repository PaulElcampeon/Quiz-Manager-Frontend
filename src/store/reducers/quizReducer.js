import { UPDATE_ALL_QUIZZES_IN_STORE, UPDATE_ONE_QUIZ_IN_STORE, ADD_QUIZ_IN_STORE, DELETE_QUIZ_IN_STORE } from "../actions"

const quizReducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_ALL_QUIZZES_IN_STORE:
            return action.projects;
        case UPDATE_ONE_QUIZ_IN_STORE:
            return action.projects;
        case ADD_QUIZ_IN_STORE:
            return action.projects;
        case DELETE_QUIZ_IN_STORE:
            return action.projects;
        default:
            return state;
    }
}

export default quizReducer;