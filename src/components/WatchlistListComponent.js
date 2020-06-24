import React from 'react'
import WatchlistCardComponent from "./WatchlistCardComponent";

class WatchlistListComponent extends React.Component {

    componentDidMount() {
        if (this.props.user && !this.props.user.error) {
            this.props.findWatchlistsForUser(this.props.user.id);
        } else {
            this.props.findAllWatchlists();
        }
    }

    render = () =>
        <div className={""}>
            <div className="ml-2 mr-2">
                <div className="row">
                    {
                        this.props.watchlists.map(watchlist =>
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2">
                                <WatchlistCardComponent
                                    watchlist={watchlist}
                                    key={watchlist.id}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
}

export default WatchlistListComponent;