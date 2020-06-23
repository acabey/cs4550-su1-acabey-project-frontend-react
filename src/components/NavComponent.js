import React from "react";
import {faList, faSearch, faTv, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import userService from "../services/userService";

class NavComponent extends React.Component {

    state = {
        searchTerm: '',
        errorMessage: '',
    };

    componentDidMount = () => {
        this.props.getProfile();
        if (this.props.match.params.title) {
            this.setState({searchTerm: decodeURI(this.props.match.params.title)})
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.title !== prevProps.match.params.title) {
            this.setState({searchTerm: decodeURI(this.props.match.params.title)})
            this.props.getProfile();
        }
    }

    handleKeys = (e) => {
        if (e.key === "Enter") {
            this.search()
        }
    };


    search = () => {
        if (this.state.searchTerm) {
            this.props.history.push(`/search/${encodeURI(this.state.searchTerm)}`)
            this.props.searchMedia(this.state.searchTerm);
        }
    };

    render = () =>
        <nav className="navbar navbar-expand navbar-light justify-content-between fixed-top wbdv-navbar bg-mute-secondary">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <Link className="btn navbar-brand nav-link"
                                to={"/"}>
                            <span className="wbdv-field wbdv-hamburger mr-2">
                                <FontAwesomeIcon className={`color-primary`} icon={faTv} size={'1x'}/>
                            </span>
                            <strong className="wbdv-label wbdv-course-manager d-none d-md-inline text-mute-primary">
                                What to Watch
                            </strong>
                        </Link>
                    </li>
                </ul>

                <input className="form-control mr-4 bg-transparent-0 rounded-0 wbdv-field wbdv-new-course text-black-50"
                       type="text"
                       placeholder="Search"
                       aria-label="Search media"
                       onKeyPress={this.handleKeys}
                       onChange={(e) => this.setState({searchTerm: e.target.value})}/>

                <div className="navbar-light navbar-nav">
                    <button
                        className="btn nav-link wbdv-button wbdv-search"
                        onClick={this.search}>
                        <FontAwesomeIcon className={`color-primary`} icon={faSearch} size={'2x'}/>
                    </button>
                </div>

                <div className="nav-item navbar-light navbar-nav dropdown">
                    <button className="btn nav-link dropdown-toggle"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                        <FontAwesomeIcon className={`color-primary`} icon={faUserCircle} size={'2x'}/>
                    </button>
                    {
                        this.props.user ?
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/profile">Profile</Link>
                                <Link className="dropdown-item" to="/logout">Logout</Link>
                            </div>
                            :
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/login">Login</Link>
                                <Link className="dropdown-item" to="/register">Register</Link>
                            </div>
                    }
                </div>
            </div>
        </nav>

}

export default NavComponent
