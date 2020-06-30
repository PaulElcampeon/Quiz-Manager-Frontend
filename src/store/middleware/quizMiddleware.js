import { GET_QUIZZES, UPDATE_ONE_QUIZ_IN_STORE, DELETE_QUIZ, CREATE_QUIZ, 
    updateMessage, updateOneQuizInStore, updateAllQuizzesInStore, deleteQuizInStore, addQuizInStore } from '../actions/index';
import { updateQuiz, createQuiz, deleteQuiz, getQuizzes } from '../../comms/commsService'
import store from '../index';

export const quizMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case GET_QUIZZES:
            getQuizzes()
                .then(res => res.json())
                .then(data => {
                    if (data.status && data.status !== 202) {
                        store.dispatch(updateMessage("Something wrong happened"))
                    } else {
                        store.dispatch(updateAllQuizzesInStore(data.quizzes));
                        store.dispatch(updateMessage(null))
                    }
                })
                .catch(error => {
                    console.log(error.message)
                    store.dispatch(updateMessage("Something wrong happened"))
                })
            break;
        case UPDATE_ONE_QUIZ_IN_STORE:
            updateQuiz(action.data)
                .then(res => res.json())
                .then(data => {
                    if (data.status && data.status !== 202) {
                        store.dispatch(updateMessage("Something wrong happened"))
                    } else {
                        store.dispatch(updateOneQuizInStore(data.quiz));
                        store.dispatch(updateMessage(null))
                    }
                })
                .catch(error => {
                    console.log(error.message)
                    store.dispatch(updateMessage("Something wrong happened"))
                })
            break;
        // case UPDATE_ALL_QUIZZES_IN_STORE:
        //     updateQuiz()
        //         .then(res => res.json())
        //         .then(data => {
        //             if (data.status && data.status !== 202) {
        //                 store.dispatch(updateMessage("Something wrong happened"))
        //             } else {
        //                 store.dispatch(updateProjects(data.projects));
        //                 store.dispatch(updateMessage(null))
        //             }
        //         })
        //         .catch(error => {
        //             console.log(error.message)
        //             store.dispatch(updateMessage("Something wrong happened"))
        //         })
        //     break;
        case DELETE_QUIZ:
            deleteQuiz(action.data)
                .then(res => res.json())
                .then(data => {
                    if (data.status && data.status !== 202) {
                        store.dispatch(updateMessage("Something wrong happened"))
                    } else {
                        store.dispatch(deleteQuizInStore(action.data));
                        store.dispatch(updateMessage(null))
                    }
                })
                .catch(error => {
                    console.log(error.message)
                    store.dispatch(updateMessage("Something wrong happened"))
                })
            break;
        case CREATE_QUIZ:
            createQuiz(action.data)
                .then(res => res.json())
                .then(data => {
                    if (data.status && data.status !== 202) {
                        store.dispatch(updateMessage("Something wrong happened"))
                    } else {
                        store.dispatch(addQuizInStore(action.data));
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