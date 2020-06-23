import {connect} from "react-redux";
import MediumService from "../services/MediumService";
import mediumReducer from "../reducers/mediumReducer";
import NavComponent from "../components/NavComponent";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        media: state.mediumReducer.media,
        match: ownProps.match
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        searchMedia: (title) => {
            MediumService.searchMediaByTitle(title)
                .then(actualMedia => dispatch({
                    type: "FIND_MEDIA",
                    media: actualMedia
                }))
        }
    }
};

const NavContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(NavComponent);

export default NavContainer;
