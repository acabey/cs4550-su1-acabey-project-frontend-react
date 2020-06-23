import React from "react";
import {Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV, faPlus, faPlusCircle, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import Link from "@material-ui/core/Link";

class WatchlistBarComponent extends React.Component {

    render = () =>
        <Row>
            {
                this.props.user ?
                    <>
                        <div className="nav-item navbar-light navbar-nav dropdown">
                            <button className="btn nav-link dropdown-toggle caret-off ml-2"
                                    id="watchlistDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                <FontAwesomeIcon icon={faEllipsisV}/>
                            </button>
                            <div className="dropdown-menu bg-transparent" aria-labelledby="watchlistDropdown">
                                <Link className="dropdown-item" to="/profile">Profile</Link>
                                <Link className="dropdown-item" to="/logout">Logout</Link>
                            </div>
                        </div>

                        <button className={"btn float-right"} onClick={this.props}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                    </>
                    :
                    <Link to={"/login"} className={"ml-2 text-color-primary"}>
                        Sign in to add to watchlists
                    </Link>
            }
        </Row>

}

export default WatchlistBarComponent;