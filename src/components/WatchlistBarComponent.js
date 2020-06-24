import React from "react";
import {Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV, faPlus, faPlusCircle, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import {faCheckCircle, faCircle} from "@fortawesome/free-regular-svg-icons";
import WatchlistDropdownComponent from "./WatchlistDropdownComponent";

class WatchlistBarComponent extends React.Component {

    componentDidMount = () => {
        this.props.getProfile();
        if (this.props.user) {
            this.props.findWatchlistsForUser(this.props.user.id);
        }
    };

    render = () =>
        <Row>
            {
                this.props.user ?
                    <>
                        <div className="nav-item navbar-light navbar-nav dropdown">
                            <Tooltip title="Select watchlists" className={'float-left'}>
                                <IconButton
                                    className="btn nav-link dropdown-toggle caret-off ml-2 mb-2"
                                    id="watchlistDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    aria-label="Select watchlists">
                                    <FontAwesomeIcon icon={faEllipsisV}/>
                                </IconButton>
                            </Tooltip>
                        </div>

                        <div className="dropdown-menu bg-mute-dropdown" aria-labelledby="watchlistDropdown">
                            {/*this.props.watchlists && this.props.watchlists.map((watchlist) => <button className="btn dropdown-item bg-mute-dropdown-select text-white">{watchlist.title}</button>)*/}
                            {/*this.props.watchlists && this.props.watchlists.map((watchlist) => <span className="dropdown-item bg-mute-dropdown-select text-white">{watchlist.title}</span>)*/}
                            <button className="btn dropdown-item bg-mute-dropdown-select text-white border-top" to="/watchlists">Create new watchlist</button>
                        </div>

                        <Tooltip title="Add to watchlist" className={'float-left'}>
                            <IconButton
                                className="btn nav-link caret-off ml-2 float-right"
                                aria-label="Add to watchlist"
                                onClick={this.props}>
                                <FontAwesomeIcon icon={faPlus}/>
                            </IconButton>
                        </Tooltip>
                    </>
                    :
                    <Link to={"/login"} className={"ml-2 text-color-primary"}>
                        Sign in to add to watchlists
                    </Link>
            }
        </Row>

}

export default WatchlistBarComponent;