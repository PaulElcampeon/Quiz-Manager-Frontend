export const LOGIN = 'LOGIN'; //should be a middleware
export const LOGOUT = 'LOGOUT';//should be a middleware
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGING_IN = 'LOGGING_IN';

export const AUTHENTICATE_TOKEN = 'AUTHENTICATE_TOKEN';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';

export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export const GET_QUIZZES = 'GET_QUIZZES';
export const CREATE_QUIZ = 'CREATE_QUIZ';
export const UPDATE_QUIZ = 'UPDATE_QUIZ';
export const UPDATE_ONE_QUIZ_IN_STORE = 'UPDATE_ONE_QUIZ_IN_STORE';
export const UPDATE_ALL_QUIZZES_IN_STORE = 'UPDATE_ALL_QUIZ_IN_STORE';
export const DELETE_QUIZ = 'DELETE_QUIZ';
export const DELETE_QUIZ_IN_STORE = 'DELETE_QUIZ_IN_STORE';
export const ADD_QUIZ_IN_STORE = 'ADD_QUIZ_IN_STORE';

export const loginAction = (credential) => {
    return {
        type: LOGIN,
        credential: credential
    }
}

export const authenticateToken = (token) => {
    return {
        type: AUTHENTICATE_TOKEN,
        token: token
    }
}


export const loggingIn = () => {
    return {
        type: LOGGING_IN,
        loggingIn: true
    }
}

export const logoutAction = () => {
    return {
        type: LOGOUT
    }
}

export const loggedInAction = (loggedIn) => {
    return {
        type: LOGGED_IN,
        loggedIn: loggedIn
    }
}

export const updateToken = (token) => {
    return {
        type: UPDATE_TOKEN,
        token: token
    }
}

export const getQuizzes = (token) => {
    return {
        type: GET_QUIZZES,
        token: token
    }
}

export const addQuizInStore = (quiz) => {
    return {
        type: ADD_QUIZ_IN_STORE,
        quiz: quiz
    }
}

export const updateQuizInDB = (quizWithToken) => {
    return {
        type: UPDATE_QUIZ,
        quizWithToken: quizWithToken
    }
}

export const createQuiz = (quizWithToken) => {
    return {
        type: CREATE_QUIZ,
        quizWithToken: quizWithToken
    }
}

export const deleteQuiz = (quizIdWithToken) => {
    return {
        type: DELETE_QUIZ,
        quizIdWithToken: quizIdWithToken
    }
}
export const deleteQuizInStore = (quizId) => {
    return {
        type: DELETE_QUIZ_IN_STORE,
        quizId: quizId
    }
}

export const updateOneQuizInStore = (quiz) => {
    return {
        type: UPDATE_ONE_QUIZ_IN_STORE,
        quiz: quiz
    }
}

export const updateAllQuizzesInStore = (quizzes) => {
    return {
        type: UPDATE_ALL_QUIZZES_IN_STORE,
        quizzes: quizzes
    }
}





export const updateMessage = (message) => {
    return {
        type: UPDATE_MESSAGE,
        message: message
    }
}