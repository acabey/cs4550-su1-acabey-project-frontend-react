import React from "react";
import {Link} from "react-router-dom";
import userService from "../services/userService";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class RegisterComponent extends React.Component {

    state = {
        username: '',
        password: '',
        verifyPassword: '',
        errorMessage: ''
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
        else if (this.state.password !== this.state.verifyPassword) {
            message = 'Passwords are not equal';
            isValid = false;
        }

        this.setState({errorMessage: message});
        return isValid;
    };

    register = () => {

        // Do client side validation first
        if (!this.validate()) return;

        userService.register(this.state.username, this.state.password)
            .then(currentUser => {
                if (!currentUser) {
                    console.error("Invalid response from server on register");
                }
                else if (currentUser.error) {
                    this.setState({errorMessage: currentUser.message});
                }
                else {
                    this.props.history.push("/profile")
                }
            })
            .catch((e) => {
                console.log(`Error registering ${e.toString()}`)
            })
    };

    render = () =>
        <div className={"container"}>

            {
                this.state.errorMessage &&
                <div className="alert alert-danger">
                    <strong>Error!</strong> {this.state.errorMessage}
                    <button className={"float-right btn"} onClick={() => this.setState({errorMessage: ''})}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </div>

            }

            <h1>Register</h1>

            <div className={"rounded border border-secondary bg-white"}>
                <div className={"m-4"}>

                    <div className={"form-group row"}>
                        <label for="username"
                               className={"col-sm-2 col-form-label"}>
                            Username</label>
                        <div className={"col-sm-10"}>
                            <input  id="username"
                                    className={"form-control wbdv-field wbdv-username"}
                                    type="text"
                                    placeholder="joe123"
                                    title="Use this username to login"
                                    onChange={
                                        (e) => {
                                            this.setState({username: e.target.value})}
                                    }/>
                        </div>
                    </div>

                    <div className={"form-group row"}>
                        <label for="password"
                               className={"col-sm-2 col-form-label"}>
                            Password
                        </label>
                        <div className={"col-sm-10"}>
                            <input  id="password"
                                    className={"form-control wbdv-field wbdv-password"}
                                    type="password"
                                    onChange={
                                        (e) => {
                                            this.setState({password: e.target.value})}
                                    }/>
                        </div>
                    </div>

                    <div className={"form-group row"}>
                        <label for="verify-password"
                               className={"col-sm-2 col-form-label"}>
                            Verify Password
                        </label>
                        <div className={"col-sm-10"}>
                            <input  id="verify-password"
                                    className={"form-control wbdv-field wbdv-password-verify"}
                                    type="password"
                                    onChange={
                                        (e) => {
                                            this.setState({verifyPassword: e.target.value})}
                                    }/>
                        </div>
                    </div>

                    <div className={"form-group row"}>
                        <label className={"col-sm-2 col-form-label"}></label>
                        <div className={"col-sm-10"}>
                            <div className={"form-group row"}>
                                <button
                                    className={"btn btn-primary btn-primary btn-block wbdv-button wbdv-register"}
                                    onClick={this.register}>
                                    Register
                                </button>
                            </div>
                            <div className={"row"}>
                                <div className={"col-6"}>
                                    <Link className={"wbdv-link wbdv-login"}
                                          to="/login">Have an account already? Login</Link>
                                </div>
                                <div className={"col-6"}>
                                    <Link className={"float-right wbdv-link wbdv-cancel"}
                                          to="/">Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
};

export default RegisterComponent