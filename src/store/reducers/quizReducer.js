import { UPDATE_ALL_QUIZZES_IN_STORE, UPDATE_ONE_QUIZ_IN_STORE, ADD_QUIZ_IN_STORE, DELETE_QUIZ_IN_STORE } from "../actions"

const quizReducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_ALL_QUIZZES_IN_STORE:
            return action.quizzes;
        case UPDATE_ONE_QUIZ_IN_STORE:
            const quiz = action.quiz;
            return state.map(element => {
                if (element.quizTitle === quiz.quizTitle) return quiz;
                return element;
            })
        case ADD_QUIZ_IN_STORE:
            return state.concat(action.quiz);
        case DELETE_QUIZ_IN_STORE:
            return state.filter(element => action.quizId !== element.quizTitle);
        default:
            return state;
    }
}

export default quizReducer;