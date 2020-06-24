import {connect} from "react-redux";
import WatchlistService from "../services/WatchlistService";
import watchlistReducer from "../reducers/watchlistReducer";
import WatchlistListComponent from "../components/WatchlistListComponent";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        watchlists: state.watchlistReducer.watchlists,
        editingWatchlist: state.watchlistReducer.editingWatchlist,
        params: ownProps.params,
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findAllWatchlists: () => {
            WatchlistService.findAllWatchlists()
                .then(actualWatchlists => dispatch({
                    type: 'FIND_WATCHLISTS',
                    watchlists: actualWatchlists
                }))
        },
    }
};

const TopWatchlistContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WatchlistListComponent);

export default TopWatchlistContainer;
