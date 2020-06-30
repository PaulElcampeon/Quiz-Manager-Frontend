import { UPDATE_MESSAGE } from "../actions"

const messageReducer = (state = null, action) => {
    switch(action.type) {
        case UPDATE_MESSAGE: 
            return action.message;
        default:
            return state;

    }
}

export default messageReducer;