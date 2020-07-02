import { LOGOUT, updateMessage, updateToken, loggedInAction } from '../actions/index';
import SessionManager from '../../utils/sessionManager';
import store from '../index';

export const logoutMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case LOGOUT:
            store.dispatch(loggedInAction(false));
            store.dispatch(updateToken({ token: null, permLv: 1 }));
            SessionManager.removeUserData();
            store.dispatch(updateMessage(null));
            break;
        default:
            next(action);
    }
}

export default logoutMiddleware;