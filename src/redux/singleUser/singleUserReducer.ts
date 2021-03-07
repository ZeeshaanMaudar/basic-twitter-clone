import * as actionTypes from './singleUserActionTypes';

const initialState = {
    isFetchingUser: false,
    user: null,
    errorUser: '',
    isFetchingSingleUserDetails: false,
    userDetails: null,
    errorUserDetails: ''
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
                user: action.payload,
                isFetchingUsers: false
            }
        case actionTypes.FETCH_SINGLE_USER_FAILURE:
            return {
                ...state,
                errorUsers: action.payload,
                isFetchingUsers: false
            }
    
        // fetch single user details list
        case actionTypes.FETCH_SINGLE_USER_DETAILS_REQUEST:
            return {
                ...state,
                isFetchingSingleUserDetails: true
            }
        case actionTypes.FETCH_SINGLE_USER_DETAILS_SUCCESS:
            return {
                ...state,
                userDetails: action.payload,
                isFetchingSingleUserDetails: false
            }
        case actionTypes.FETCH_SINGLE_USER_DETAILS_FAILURE:
            return {
                ...state,
                errorUserDetails: action.payload,
                isFetchingSingleUserDetails: false
            }
        default:
            return state;
    }
}

export default singleUserReducer;
