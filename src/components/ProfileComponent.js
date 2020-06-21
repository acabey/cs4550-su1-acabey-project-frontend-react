import React from "react";
import userService from "../services/userService";
import AlertComponent from "./AlertComponent";

class ProfileComponent extends React.Component {

    state = {
        username: '',
        password: '',
        email: '',
        role: '',
        bio: '',
        imageUrl: '',
        successMessage: ''
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
                        role: user.role,
                        bio: user.bio,
                        imageUrl: user.imageUrl
                    })
            })
    };

    validate = () => {
        let message;
        let isValid = true;

        if (this.state.username === '') {
            message = 'Username cannot be blank';
            isValid = false;
        }
        else if (this.state.password === '') {
            message = 'Password cannot be blank';
            isValid = false;
        }
        else if (!['USER', 'ADMIN', 'MODERATOR'].includes(this.state.role)) {
            message = `Invalid user role: ${this.state.role}`;
            isValid = false;
        }

        this.setState({errorMessage: message});
        return isValid;
    };

    update = () => {

        if (!this.validate()) return;

        userService.updateProfile(this.state.username ,{
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            role: this.state.role,
            bio: this.state.bio,
            imageUrl: this.state.imageUrl
        })
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

            {
                this.state.successMessage &&
                <AlertComponent alertType={'success'}
                                message={this.state.successMessage}
                                clear={() => {
                                    this.setState({successMessage: ''})
                                }}/>
            }
            {
                this.state.errorMessage &&
                <AlertComponent alertType={'danger'}
                                message={this.state.errorMessage}
                                clear={() => {this.setState({errorMessage: ''})}}/>
            }

            <div className="rounded border border-secondary bg-white">
                <div className="m-4">
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
                                   onChange={(e) => {this.setState({password: e.target.value})}}
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
                                   onChange={(e) => {this.setState({email: e.target.value})}}
                                   title="Email for this account"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-2 col-sm-6 col-form-label"
                               htmlFor="role">
                            Role
                        </label>
                        <div className="col-lg-10 col-sm-6">
                            <select className="form-control custom-select wbdv-field wbdv-role"
                                    id="role"
                                    value={this.state.role}
                                    onChange={(e) => {this.setState({role: e.target.value})}}>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                                <option value="ADMIN">Admin</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-2 col-sm-6 col-form-label"
                               htmlFor="imageUrl">
                            Profile Image
                        </label>
                        <div className="col-lg-10 col-sm-6">
                            <input id="bio"
                                   type="text"
                                   className="form-control wbdv-field wbdv-image-url"
                                   placeholder="Image URL"
                                   value={this.state.imageUrl}
                                   onChange={(e) => {this.setState({imageUrl: e.target.value})}}
                                   title="Profile image URL"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-2 col-sm-6 col-form-label"
                               htmlFor="bio">
                            Bio
                        </label>
                        <div className="col-lg-10 col-sm-6">
                            <textarea id="bio"
                                      className="form-control wbdv-field wbdv-bio"
                                      placeholder="Biography"
                                      value={this.state.bio}
                                      onChange={(e) => {this.setState({bio: e.target.value})}}
                                      title="Profile biography"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-success btn-block wbdv-button wbdv-update"
                                    onClick={this.update}>
                                Update
                            </button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-warning btn-block wbdv-button wbdv-logout"
                                    onClick={this.logout}>
                                Logout
                            </button>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-danger btn-block wbdv-button wbdv-delete"
                                    onClick={this.deleteModal}>
                                Delete this account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
};

export default ProfileComponent;
