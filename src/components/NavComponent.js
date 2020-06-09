import React from "react";
import {faList, faPlus, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const NavComponent = ({searchTitleInputHandler, searchButtonInputHandler}) =>
    <nav className="navbar navbar-expand navbar-light bg-white justify-content-between fixed-top wbdv-navbar">
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="navbar-brand nav-link dropdown-toggle"
                       href="#"
                       id="managerDropdown"
                       role="button"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                       aria-expanded="false">
                        <span className="wbdv-field wbdv-hamburger mr-2"><FontAwesomeIcon icon={faList} size={'1x'}/></span>
                        <span className="wbdv-label wbdv-course-manager d-none d-md-inline">What to Watch</span>
                    </a>
                    <div className="dropdown-menu">
                        <Link to="/" className="dropdown-item active">Example</Link>
                        <Link to="/" className="dropdown-item">Example</Link>
                    </div>
                </li>
            </ul>

            <input className="form-control mr-4 bg-transparent-0 rounded-0 wbdv-field wbdv-new-course"
                   type="text"
                   placeholder="Search"
                   aria-label="Search media"
                   onChange={searchTitleInputHandler}/>

            <div className="navbar-light navbar-nav">
                <a
                    className="btn nav-link wbdv-button wbdv-add-course"
                    onClick={searchButtonInputHandler}>
                    <FontAwesomeIcon icon={faPlus} size={'2x'}/>
                </a>
            </div>

            <div className="nav-item navbar-light navbar-nav dropdown">
                <a className="nav-link dropdown-toggle"
                   href="#"
                   id="navbarDropdown"
                   role="button"
                   data-toggle="dropdown"
                   aria-haspopup="true"
                   aria-expanded="false">
                    <FontAwesomeIcon icon={faUserCircle} size={'2x'}/>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/profile">Profile</Link>
                    <Link className="dropdown-item" to="/login">Login</Link>
                </div>
            </div>
        </div>
    </nav>;

export default NavComponent
