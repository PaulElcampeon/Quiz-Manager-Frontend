class SessionManager {

    static storeUserData = (userData) => {
        sessionStorage.setItem('quiz-manager', JSON.stringify(userData));
    }

    static getUserData = () => {
        return JSON.parse(sessionStorage.getItem('quiz-manager'));
    }

    static removeUserData = () => {
        sessionStorage.removeItem('quiz-manager');
    }
}

export default SessionManager;