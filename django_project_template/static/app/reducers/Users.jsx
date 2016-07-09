import {
    USER_ADD,
    USER_REMOVE
} from '../actions/Users';

export function user(state={users: []}, action) {
    switch (action.type) {
        case USER_ADD:
            return state;
        case USER_REMOVE:
            return state;
        default:
            return state;
    }
}
