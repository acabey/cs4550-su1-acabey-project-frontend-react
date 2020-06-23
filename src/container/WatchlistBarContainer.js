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
                    type: 'FIND_WATCHLISTS_FOR_USER',
                    watchlists: watchlistsForUser
                })).catch(error => dispatch({
                type: 'FIND_WATCHLISTS_FOR_USER',
                watchlists: []
            }))
        },
        selectWatchlists: (selectedIds) => {
            dispatch({
                type: "SELECT_WATCHLISTS",
                media: selectedIds
            })
        }
    }
};

const NavContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WatchlistBarComponent);

export default NavContainer;
