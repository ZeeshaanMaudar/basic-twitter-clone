import * as actionTypes from './singleUserActionTypes';

const initialState = {
    isFetchingUser: false,
    user: null,
    errorUser: '',
};

const singleUserReducer = (state = initialState, action: any) => {
    switch(action.type) {
        // fetch user
        case actionTypes.FETCH_SINGLE_USER_REQUEST:
            return {
                ...state,
                isFetchingUsers: true
            }
        case actionTypes.FETCH_SINGLE_USER_SUCCESS:
            return {
                ...state,
                usersList: action.payload,
                isFetchingUsers: false
            }
        case actionTypes.FETCH_SINGLE_USER_FAILURE:
            return {
                ...state,
                errorUsers: action.payload,
                isFetchingUsers: false
            }
    
        default:
            return state;
    }
}

export default singleUserReducer;
