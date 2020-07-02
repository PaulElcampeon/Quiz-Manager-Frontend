import { LOGIN, AUTHENTICATE_TOKEN, updateMessage, updateToken, loggedInAction, getQuizzes } from '../actions/index';
import { attemptLogin, aunthticateTokenRequest } from '../../comms/commsService'
import credentialsChecker from '../../utils/loginPreVerification';
import SessionManager from '../../utils/sessionManager';
import store from '../index';

export const loginMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case LOGIN:
            if (credentialsChecker(action.credential)) {
                attemptLogin(action.credential)
                    .then(res => res.json())
                    .then(data => {
                        if (data.status && data.status !== 202) {
                            store.dispatch(updateMessage("Your password  or username was incorrect"))
                        } else {
                            store.dispatch(getQuizzes(data.jwt))
                            SessionManager.storeUserData({ token: data.jwt, permLv: data.restrictionLevel });
                            store.dispatch(updateToken({ token: data.jwt, permLv: data.restrictionLevel }));
                            store.dispatch(loggedInAction(true));
                            store.dispatch(updateMessage(null))
                        }
                    })
                    .catch(error => {
                        console.log(error.message)
                        store.dispatch(updateMessage("Something wrong happened"))
                    })
            } else {
                store.dispatch(updateMessage("Credentials are not valid"))
            }
            break;
        case AUTHENTICATE_TOKEN:
            aunthticateTokenRequest(action.token)
                .then(res => res.json())
                .then(data => {
                    if (data.status && data.status !== 202) {
                        store.dispatch(updateMessage("Something wrong happened"))
                    } else {
                        if (SessionManager.getUserData()) {
                            store.dispatch(getQuizzes(SessionManager.getUserData().token));
                            store.dispatch(updateToken({ token: SessionManager.getUserData().token, permLv: SessionManager.getUserData().permLv }));
                            store.dispatch(loggedInAction(true));
                            store.dispatch(updateMessage(null))
                        }
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

export default loginMiddleware;