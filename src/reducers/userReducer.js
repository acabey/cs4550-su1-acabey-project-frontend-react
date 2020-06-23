const initialState = {
    user: null,
    error: ''
};

const userReducer = (state=initialState, event) => {
    switch (event.type) {
        case "SIGN_IN":
            return {
                ...state,
                user: event.user
            };
        case "SIGN_OUT":
            return {
                ...state,
                user: null
            };
        case "SET_ERROR":
            return {
                ...state,
                error: event.error
            };
        default:
            return state
    }
};

export default userReducer;
