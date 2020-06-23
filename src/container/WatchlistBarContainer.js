import {connect} from "react-redux";
import WatchlistService from "../services/WatchlistService";
import WatchlistBarComponent from "../components/WatchlistBarComponent";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        watchlists: state.watchlistReducer.watchlists,
        selectedWatchlists: state.watchlistReducer.selectedWatchlists,
        user: state.userReducer.user,
        match: ownProps.match
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
        },
        selectWatchlists: (watchlistIds) => {
            dispatch({
                type: "SELECT_WATCHLISTS",
                media: watchlistIds
            })
        }
    }
};

const NavContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WatchlistBarComponent);

export default NavContainer;
