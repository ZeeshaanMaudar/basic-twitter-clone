import * as actionTypes from './usersActionTypes';

const initialState = {
    isFetchingUsers: false,
    usersList: [],
    errorUsers: '',
    isFetchingUsersDetails: false,
    usersDetailsList: [],
    errorUsersDetails: ''
};

const usersReducer = (state = initialState, action: any) => {
    switch(action.type) {
        // fetch users lists
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
                errorUsers: action.payload,
                isFetchingUsers: false
            }
    
        // fetch users details list
        case actionTypes.FETCH_USERS_DETAILS_REQUEST:
            return {
                ...state,
                isFetchingUsersDetails: true
            }
        case actionTypes.FETCH_USERS_DETAILS_SUCCESS:
            return {
                ...state,
                usersDetailsList: action.payload,
                isFetchingUsersDetails: false
            }
        case actionTypes.FETCH_USERS_DETAILS_FAILURE:
            return {
                ...state,
                errorUsersDetails: action.payload,
                isFetchingUsersDetails: false
            }
        default:
            return state;
    }
}

export default usersReducer;
