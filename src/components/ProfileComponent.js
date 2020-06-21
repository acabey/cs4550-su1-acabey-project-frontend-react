import React from "react";
import {Link} from "react-router-dom";

class ProfileComponent extends React.Component {

    state = {
        username: '',
        password: ''
    };

    componentDidMount() {
        fetch("http://localhost:8080/api/profile", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => {
                return response.json()
            })
            .catch(e => {
                this.props.history.push("/")
            })
            .then(user => {
                if(user)
                    this.setState({
                        username: user.username, password: user.password
                    })
            })
    }

    update = () => {
        fetch("http://localhost:8080/api/profile", {
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT',
            credentials: "include"
        })
            .then(response => response.json())
            .then(user => this.setState({
                username: user.username, password: user.password
            }))
    }

    logout = () => {
        fetch("http://localhost:8080/api/logout", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => this.props.history.push("/"))

    }

    render = () => (
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
                                   value={this.props.user.username}
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
                                   value={this.props.user.password}
                                   title="Password for this account"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-2 col-sm-6 col-form-label"
                               htmlFor="phone">
                            Phone
                        </label>
                        <div className="col-lg-10 col-sm-6">
                            <input id="phone"
                                   className="form-control wbdv-field wbdv-phone"
                                   type="text"
                                   placeholder="Phone number"
                                   value={this.props.user.phone}
                                   title="Phone number"/>
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
                                   value={this.props.user.email}
                                   title="Email for this account"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-2 col-sm-6 col-form-label"
                               htmlFor="dob">
                            Date of birth
                        </label>
                        <div className="col-lg-10 col-sm-6">
                            <input className="form-control wbdv-field wbdv-dob"
                                   id="dob"
                                   type="date"
                                   value={this.props.user.dob}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-2 col-sm-6 col-form-label"
                               htmlFor="role">
                            Role
                        </label>
                        <div className="col-lg-10 col-sm-6">
                            <select className="form-control custom-select wbdv-field wbdv-role" id="role">
                                <option selected={this.props.user.role === "FACULTY"} value="FACULTY">Faculty</option>
                                <option selected={this.props.user.role === "STUDENT"} value="STUDENT">Student</option>
                                <option selected={this.props.user.role === "ADMIN"} value="ADMIN">Admin</option>
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
        </div>);
};

export default ProfileComponent;
