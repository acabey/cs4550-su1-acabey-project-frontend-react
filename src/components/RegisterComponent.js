import React from "react";
import {Link} from "react-router-dom";

class RegisterComponent extends React.Component {

    state = {
        username: '',
        password: ''
    }
    register = () => {
        fetch("http://localhost:8080/api/login", {
            body: JSON.stringify({username: this.state.username, password: this.state.password}),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            credentials: "include"
        }).then(response => response.json())
            .then(currentUser => {
                if(currentUser)
                    this.props.history.push("/profile")
            })

    }

    render = () => (
        <div class="container">
            <h1>Register</h1>

            <div class="rounded border border-secondary bg-white">
                <form class="m-4">

                    <div class="form-group row">
                        <label for="username"
                               class="col-sm-2 col-form-label">
                            Username</label>
                        <div class="col-sm-10">
                            <input  id="username"
                                    class="form-control wbdv-field wbdv-username"
                                    type="text"
                                    placeholder="joe123"
                                    title="Use this username to login"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="password"
                               class="col-sm-2 col-form-label">
                            Password
                        </label>
                        <div class="col-sm-10">
                            <input  id="password"
                                    class="form-control wbdv-field wbdv-password"
                                    type="password"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="verify-password"
                               class="col-sm-2 col-form-label">
                            Verify Password
                        </label>
                        <div class="col-sm-10">
                            <input  id="verify-password"
                                    class="form-control wbdv-field wbdv-password-verify"
                                    type="password"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label"></label>
                        <div class="col-sm-10">
                            <div class="form-group row">
                                <Link class="btn btn-primary btn-primary btn-block wbdv-button wbdv-register"
                                      to="/profile">Register</Link>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <Link class="wbdv-link wbdv-login"
                                          to="/login">Have an account already? Login</Link>
                                </div>
                                <div class="col-6">
                                    <Link class="float-right wbdv-link wbdv-cancel"
                                          to="/table/courses">Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
};

export default RegisterComponent