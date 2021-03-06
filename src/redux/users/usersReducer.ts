import * as actionTypes from './usersActionTypes';

const initialState = {
    isFetchingUsers: false,
    usersList: [],
    error: null
};

const usersReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case actionTypes.FETCH_USERS_REQUEST:
            return {
                ...state,
                isFetchingUsers: true
            }
        case actionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                usersList: action.payload,
                isFetchingUsers: false
            }
        case actionTypes.FETCH_USERS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetchingUsers: false
            }
        default:
            return state;
    }
}

export default usersReducer;
