import {connect} from "react-redux";
import WatchlistService from "../services/WatchlistService";
import watchlistReducer from "../reducers/watchlistReducer";
import WatchlistListComponent from "../components/WatchlistListComponent";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        watchlists: state.watchlistReducer.watchlists,
        editingWatchlist: state.watchlistReducer.editingWatchlist,
        user: state.userReducer.user,
        params: ownProps.params,
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findWatchlistsForUser: (userId) =>  {
            WatchlistService.findWatchlistsForUser(userId)
                .then(watchlistsForUser => dispatch({
                    type: 'FIND_WATCHLISTS',
                    watchlists: watchlistsForUser
                })).catch(error => dispatch({
                type: 'FIND_WATCHLISTS',
                watchlists: []
            }))
        },
        findAllWatchlists: () => {
            WatchlistService.findAllWatchlists()
                .then(actualWatchlists => dispatch({
                    type: 'FIND_WATCHLISTS',
                    watchlists: actualWatchlists
                }))
        },
        updateWatchlist: (watchlistId, newWatchlistData) => {
            newWatchlistData.id = watchlistId; // Ensure proper ID is set in the replacement
            WatchlistService.updateWatchlist(watchlistId, newWatchlistData)
                .then(didUpdate => {
                    if (didUpdate)
                        dispatch({
                            type: 'UPDATE_WATCHLIST',
                            watchlistId: watchlistId,
                            updatedWatchlist: newWatchlistData
                        })
                })
        },
        createWatchlist: (userId, newWatchlist) => {
            WatchlistService.createWatchlist(userId, newWatchlist)
                .then(actualNewWatchlist => dispatch({
                    type: "CREATE_WATCHLIST",
                    newWatchlist: actualNewWatchlist
                }))
        },
        deleteWatchlist: (watchlistId) => {
            WatchlistService.deleteWatchlist(watchlistId)
                .then(status => dispatch({
                    type: "DELETE_WATCHLIST",
                    watchlistId: watchlistId
                }))
        }
    }
};

const TopWatchlistContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WatchlistListComponent);

export default TopWatchlistContainer;
