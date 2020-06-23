import {connect} from "react-redux";
import LoginComponent from "../components/LoginComponent";
import userService from "../services/userService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        user: state.userReducer.user,
        errorMessage: state.userReducer.errorMessage,
        match: ownProps.match,
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        login: (username, password) => {
            userService.login(username, password)
                .then(currentUser => {
                    if (!currentUser) {
                        console.error("Invalid response body for login")
                        dispatch({
                            type: "SET_ERROR",
                            error: "Null reply on login"
                        });
                    }
                    else if (currentUser.error) {
                        dispatch({
                            type: "SET_ERROR",
                            error: currentUser.message
                        });
                    }
                    else {
                        dispatch({
                            type: "SIGN_IN",
                            user: currentUser
                        });
                    }
                })
                .catch(e => {
                    console.error(`Error on login: ${e}`);
                    dispatch({
                        type: "SET_ERROR",
                        error: e
                    });
                })
        },
        logout: () => {
            dispatch({
                type: "SIGN_OUT",
            });
        },
        setError: (message) => {
            dispatch({
                type: "SET_ERROR",
                error: message
            });

        }
    }
};

const LoginContainer= connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(LoginComponent);

export default LoginContainer;
