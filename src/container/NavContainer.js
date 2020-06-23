import {connect} from "react-redux";
import MediumService from "../services/MediumService";
import mediumReducer from "../reducers/mediumReducer";
import NavComponent from "../components/NavComponent";
import userService from "../services/userService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        media: state.mediumReducer.media,
        user: state.userReducer.user,
        match: ownProps.match,
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        searchMedia: (title) => {
            MediumService.searchMediaByTitle(title)
                .then(actualMedia => {
                    !actualMedia.error ?
                        dispatch({
                            type: "FIND_MEDIA",
                            media: actualMedia
                        })
                        :
                        dispatch({
                            type: "FIND_MEDIA_ERROR",
                            error: actualMedia
                        })
                })
        },
        getProfile: () => {
            userService.getProfile()
                .then(foundUser => {
                    if(!foundUser || foundUser.error) {
                        // Not signed in
                    }
                    else {
                        dispatch({
                            type: "SIGN_IN",
                            user: foundUser
                        })
                    }
                })
        },
        logout: () => {
            userService.logout()
                .then(foundUser => {
                    if(!foundUser || foundUser.error) {
                        // Not signed in
                    }
                    else {
                        dispatch({
                            type: "SIGN_IN",
                            user: foundUser
                        })
                    }
                })
        }
    }
};

const NavContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(NavComponent);

export default NavContainer;
