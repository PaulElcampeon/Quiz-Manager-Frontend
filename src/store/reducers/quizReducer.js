import { UPDATE_ALL_QUIZZES_IN_STORE, UPDATE_ONE_QUIZ_IN_STORE, ADD_QUIZ_IN_STORE, DELETE_QUIZ_IN_STORE } from "../actions"

const quizReducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_ALL_QUIZZES_IN_STORE:
            return action.quizzes;
        case UPDATE_ONE_QUIZ_IN_STORE:
            const obj = action.quizWithIndex;
            return state.map((element, index) => {
                if (index === obj.index) return obj.quiz;
                return element;
            })
        case ADD_QUIZ_IN_STORE:
            return state.concat(action.quiz);
        case DELETE_QUIZ_IN_STORE:
            return state.filter((element, index) => action.quizId !== index);
        default:
            return state;
    }
}

export default quizReducer;