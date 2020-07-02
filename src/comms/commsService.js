export const addQuiz = (quiz, token) => {
    return fetch('/quiz/add', {
        method: 'post',
        body: JSON.stringify(quiz),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const aunthticateTokenRequest = (token) => {
    return fetch('/user/token/authenticate', {
        method: 'post',
        body: JSON.stringify({authenticating: true}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const getQuizzes = (token) => {
    return fetch('/quiz/get', {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const updateQuiz = (quiz, token) => {
    return fetch('/quiz/update', {
        method: 'put',
        body: JSON.stringify(quiz),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const createQuiz = (quiz, token) => {
    return fetch('/quiz/create', {
        method: 'post',
        body: JSON.stringify(quiz),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const deleteQuiz = (quizId, token) => {
    return fetch('/quiz/delete', {
        method: 'delete',
        body: JSON.stringify({quizId:quizId}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const attemptLogin = (credential) => {
    return fetch('/user/authenticate', {
        method: 'post',
        body: JSON.stringify(credential),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}