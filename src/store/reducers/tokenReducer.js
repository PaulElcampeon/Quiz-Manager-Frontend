import { UPDATE_TOKEN } from '../actions';

const tokenReducer = (state = {token:null, permLv:1}, action) => {
    switch (action.type) {
        case UPDATE_TOKEN:
            return action.token
        default:
            return state
    }
}

export default tokenReducer;