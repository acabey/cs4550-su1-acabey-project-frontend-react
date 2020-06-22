import {connect} from "react-redux";
import SearchMediaComponent from "../components/SearchMediaComponent";
import MediumService from "../services/MediumService";
import mediumReducer from "../reducers/mediumReducer";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        media: state.mediumReducer.media,
        selectedMedia: state.mediumReducer.selectedMedia,
        params: {match: {title: 'Example'}}
        //params: ownProps.params,
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findMediaForUser: (username) =>  {
            MediumService.findMediaForUser(username)
                .then(mediaForUser => dispatch({
                    type: 'FIND_MEDIA',
                    media: mediaForUser
                }))
                .catch(error => {
                    console.error('Could not find media for user')
                })
        },
        findAllMedia: () => {
            MediumService.findAllMedia()
                .then(actualMedia => dispatch({
                    type: 'FIND_MEDIA',
                    media: actualMedia
                }))
        },
        updateMedium: (mediumId, newMediumData) => {
            newMediumData.id = mediumId; // Ensure proper ID is set in the replacement
            MediumService.updateMedium(mediumId, newMediumData)
                .then(didUpdate => {
                    if (didUpdate)
                        dispatch({
                            type: 'UPDATE_MEDIUM',
                            updatedMedium: newMediumData
                        })
                })
        },
        createMedium: (username, newMedium) => {
            MediumService.createMedium(username, newMedium)
                .then(actualNewMedium => dispatch({
                    type: "CREATE_MEDIUM",
                    newMedium: actualNewMedium
                }))
        },
        deleteMedium: (mediumId) => {
            MediumService.deleteMedium(mediumId)
                .then(status => dispatch({
                    type: "DELETE_MEDIUM",
                    mediumId: mediumId
                }))
        },
        searchMedia: (title) => {
            MediumService.searchMediaByTitle(title)
                .then(actualMedia => dispatch({
                    type: "FIND_MEDIA",
                    media: actualMedia
                }))
        }
    }
};

const SearchMediaContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(SearchMediaComponent);

export default SearchMediaContainer;
