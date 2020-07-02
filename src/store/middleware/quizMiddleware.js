import {
    GET_QUIZZES, DELETE_QUIZ, CREATE_QUIZ, UPDATE_QUIZ,
    updateMessage, updateOneQuizInStore, updateAllQuizzesInStore,
    deleteQuizInStore, addQuizInStore
} from '../actions/index';
import { createQuiz, deleteQuiz, getQuizzes } from '../../comms/commsService'
import store from '../index';

export const quizMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case GET_QUIZZES:
            getQuizzes(action.token)
                .then(res => res.json())
                .then(data => {
                    if (data.status && data.status !== 202) {
                        store.dispatch(updateMessage("Something wrong happened"))
                    } else {
                        if (data === undefined) {
                            store.dispatch(updateAllQuizzesInStore([]));
                        } else {
                            store.dispatch(updateAllQuizzesInStore(data));
                        }
                        store.dispatch(updateMessage(null))
                    }
                })
                .catch(error => {
                    console.log(error.message)
                    store.dispatch(updateMessage("Something wrong happened"))
                })
            break;
        case DELETE_QUIZ:
            deleteQuiz(action.quizIdWithToken.quizId, action.quizIdWithToken.token)
                .then(res => res.json())
                .then(data => {
                    if (data.status && data.status !== 202) {
                        store.dispatch(updateMessage("Something wrong happened"))
                    } else {
                        store.dispatch(deleteQuizInStore(action.quizIdWithToken.quizId));
                        store.dispatch(updateMessage(null))
                    }
                })
                .catch(error => {
                    console.log(error.message)
                    store.dispatch(updateMessage("Something wrong happened"))
                })
            break;
        case CREATE_QUIZ:
            createQuiz(action.quizWithToken.quiz, action.quizWithToken.token)
                .then(res => res.json())
                .then(data => {
                    if (data.status && data.status !== 202) {
                        store.dispatch(updateMessage("Something wrong happened"))
                    } else {
                        store.dispatch(addQuizInStore(action.quizWithToken.quiz));
                        store.dispatch(updateMessage(null))
                    }
                })
                .catch(error => {
                    console.log(error.message)
                    store.dispatch(updateMessage("Something wrong happened"))
                })
            break;
        case UPDATE_QUIZ:
            createQuiz(action.quizWithToken.quiz, action.quizWithToken.token)
                .then(res => res.json())
                .then(data => {
                    if (data.status && data.status !== 202) {
                        store.dispatch(updateMessage("Something wrong happened"))
                    } else {
                        store.dispatch(updateOneQuizInStore(action.quizWithToken.quiz));
                        store.dispatch(updateMessage(null))
                    }
                })
                .catch(error => {
                    console.log(error.message)
                    store.dispatch(updateMessage("Something wrong happened"))
                })
            break;
        default:
            next(action);
    }
}

export default quizMiddleware;