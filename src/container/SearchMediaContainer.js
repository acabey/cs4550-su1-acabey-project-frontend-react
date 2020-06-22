import {connect} from "react-redux";
import SearchMediaComponent from "../components/SearchMediaComponent";
import MediumService from "../services/MediumService";
import mediumReducer from "../reducers/mediumReducer";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        media: state.mediumReducer.media,
        selectedMedia: state.mediumReducer.selectedMedia,
        params: ownProps.params,
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findMediaForUser: (topicId) =>  {
            MediumService.findMediaForUser(topicId)
                .then(mediaForUser => dispatch({
                    type: 'FIND_MEDIA_FOR_USER',
                    media: mediaForUser
                })).catch(error => dispatch({
                type: 'FIND_MEDIA_FOR_USER',
                media: []
            }))
        },
        findAllMedia: () => {
            MediumService.findAllMedia()
                .then(actualMedia => dispatch({
                    type: 'FIND_ALL_MEDIA',
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
        createMedium: (topicId, newMedium) => {
            MediumService.createMedium(topicId, newMedium)
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
                .then(status => dispatch({
                    type: "SEARCH_MEDIA",
                    title: title
                }))
        }
    }
};

const SearchMediaContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(SearchMediaComponent);

export default SearchMediaContainer;
