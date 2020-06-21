import React from 'react'

class WatchlistListComponent extends React.Component {

    componentDidMount() {
        this.props.findAllWatchlists();
    }

    render = () =>
        <div className={`row`}>
            {
                this.props.watchlists.map((watchlist, i) =>
                    <div>{watchlist.title}</div>)
            }
        </div>
}

export default WatchlistListComponent;