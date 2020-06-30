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

export const getQuizzes = () => {
    return fetch('/quiz/get', {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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
        body: JSON.stringify({id:quizId}),
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