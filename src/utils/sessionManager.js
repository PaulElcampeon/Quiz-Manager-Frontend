import store from '../store/index';
import { updateMessage, updateToken, loggedInAction } from '../store/actions/index';

class SessionManager {
    constructor() {
        this.unsubscribeListener = null;
    }

    static storeUserData = (userData) => {
        sessionStorage.setItem('quiz-manager', JSON.stringify(userData));
    }

    static doesUserDataExist = () => {
       return sessionStorage.getItem('quiz-manager');
    }

    static getUserData = () => {
        return JSON.parse(sessionStorage.getItem('quiz-manager'));
    }

    static removeUserData = () => {
        this.unsubscribeListener();
        sessionStorage.removeItem('quiz-manager')
    }

    static updateSession = () => {
        this.unsubscribeListener = store.subscribe(()=> {
            sessionStorage.setItem('quiz-manager', JSON.stringify(store.getState()));
        })
    }

    static restoreSession = () => {
        if (this.doesUserDataExist()) {
            if (!this.unsubscribeListener) {
                this.updateSession()
            }
            const userData = this.getUserData();
            store.dispatch(updateToken(userData.token));
            store.dispatch(loggedInAction(true));
            store.dispatch(updateMessage(null))
        }
    }
}

export default SessionManager;