import React from "react";
import {Link} from "react-router-dom";
import userService from "../services/userService";

class ProfileComponent extends React.Component {

    state = {
        username: '',
        password: ''
    };

    componentDidMount = () => {
        userService.getProfile()
            .catch(e => {
                this.props.history.push("/login")
            })
            .then(user => {
                if(user)
                    this.setState({
                        username: user.username,
                        password: user.password,
                        email: user.email,
                        bio: user.bio
                    })
            })
    };

    update = () => {
        userService.updateProfile()
            .then(response => response.json())
            .then(user => this.setState({
                username: user.username, password: user.password
            }))
    };

    logout = () => {
        userService.logout()
            .then(response => this.props.history.push("/"))

    };

    render = () =>
        <div className="container">
            <h1>Profile</h1>

            <div className="alert alert-success wbdv-message" role="alert">
                Profile successfully updated!
            </div>

            <div className="rounded border border-secondary bg-white">
                <form className="m-4">
                    <div className="form-group row">
                        <label className="col-lg-2 col-sm-6 col-form-label"
                               htmlFor="username">
                            Username
                        </label>
                        <div className="col-lg-10 col-sm-6">
                            <input id="username"
                                   className="form-control wbdv-field wbdv-username"
                                   value={this.state.username}
                                   type="text"
                                   placeholder="Username"
                                   title="Use this username to login"
                                   disabled/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-2 col-sm-6 col-form-label"
                               htmlFor="password">
                            Password
                        </label>
                        <div className="col-lg-10 col-sm-6">
                            <input id="password"
                                   className="form-control wbdv-field wbdv-password"
                                   type="password"
                                   placeholder="Enter password"
                                   value={this.state.password}
                                   title="Password for this account"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-2 col-sm-6 col-form-label"
                               htmlFor="email">
                            Email
                        </label>
                        <div className="col-lg-10 col-sm-6">
                            <input id="email"
                                   className="form-control wbdv-field wbdv-email"
                                   type="text"
                                   placeholder="Email address"
                                   value={this.state.email}
                                   title="Email for this account"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-2 col-sm-6 col-form-label"
                               htmlFor="role">
                            Role
                        </label>
                        <div className="col-lg-10 col-sm-6">
                            <select className="form-control custom-select wbdv-field wbdv-role" id="role">
                                <option selected={this.state.role === "FACULTY"} value="FACULTY">Faculty</option>
                                <option selected={this.state.role === "STUDENT"} value="STUDENT">Student</option>
                                <option selected={this.state.role === "ADMIN"} value="ADMIN">Admin</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <Link className="btn btn-success btn-block wbdv-button wbdv-update"
                                  to="/profile">
                                Update
                            </Link>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <Link className="btn btn-danger btn-block wbdv-button wbdv-logout"
                                  to="/">
                                Logout
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
};

export default ProfileComponent;
