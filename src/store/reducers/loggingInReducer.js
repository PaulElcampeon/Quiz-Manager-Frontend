import { LOGGING_IN } from '../actions';

const loggingInReducer = (state = false, action) => {
    switch (action.type) {
        case LOGGING_IN:
            return action.logginIn
        default:
            return state
    }
}

export default loggingInReducer;