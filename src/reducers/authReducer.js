import {SET_USER_DATA, ERROR_LOGIN} from "../constants";

const initialState = {
    login: null,
    token: null,
    isAuth: false,
    errorLogin: null,
}

const authReducer = (state = initialState, action ) => {
    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return {
                ...state,
                ...action,
            }
        case ERROR_LOGIN:
            debugger
            return {
                ...state,
                errorLogin: action.payload.password,
            }
        default:
            return state;
    }
};

export default authReducer;
