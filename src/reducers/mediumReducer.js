const initialState = {
    media: [],
    error: ''
};

const mediumReducer = (state=initialState, event) => {
    switch (event.type) {
        case "CREATE_MEDIUM":
            return {
                ...state,
                media: [
                    ...state.media,
                    event.newMedium
                ]
            };
            break
        case "DELETE_MEDIUM":
            return {
                ...state,
                media: state.media.filter(medium => medium.id !== event.mediumId)
            };
            break
        case "UPDATE_MEDIUM":
            return {
                ...state,
                media: state.media.map(
                    medium => medium.id === event.updatedMedium.id ?
                        event.updatedMedium : medium )
            };
        case "FIND_MEDIA":
            return {
                ...state,
                media: event.media,
                error: ''
            };
            break
        case "FIND_MEDIA_ERROR":
            return {
                ...state,
                error: event.error
            };
            break
        default:
            return state
    }
};

export default mediumReducer
