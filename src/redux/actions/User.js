import * as Types from '../types/User';

const initialState = {
    user: {
        token: '12345'
    },
    username: '',
    password: '',
    isLoading: false
};

const User = (state = initialState, action) => {
    switch (action.type) {
        case Types.User_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.User_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.value
            }
        case Types.User_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default User;