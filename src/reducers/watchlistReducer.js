const initialState = {
    watchlists: [],
    selectedWatchlists: []
};

const watchlistReducer = (state=initialState, event) => {
    switch (event.type) {
        case "CREATE_WATCHLIST":
            return {
                watchlists: [
                    ...state.watchlists,
                    event.newWatchlist
                ]
            };
        case "DELETE_WATCHLIST":
            return {
                watchlists: state.watchlists.filter(watchlist => watchlist.id !== event.watchlistId)
            };
        case "UPDATE_WATCHLIST":
            return {
                ...state,
                watchlists: state.watchlists.map(
                    watchlist => watchlist.id === event.updatedWatchlist.id ?
                        event.updatedWatchlist : watchlist )
            };
        case "FIND_WATCHLISTS":
            return {
                ...state,
                watchlists: event.watchlists
            };
        case "SELECT_WATCHLISTS":
            return {
                ...state,
                selectedWatchlists: event.selectedWatchlists
            };
        default:
            return state
    }
};

export default watchlistReducer
