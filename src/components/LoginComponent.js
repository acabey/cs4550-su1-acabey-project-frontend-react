import React from "react";
import {Link} from "react-router-dom";
import userService from "../services/userService";
import AlertComponent from "./AlertComponent";

class LoginComponent extends React.Component {

    state = {
        username: '',
        password: '',
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

        this.setState({errorMessage: message});
        return isValid;
    };

    login = () => {

        if (!this.validate()) return;

        this.props.login(this.state.username, this.state.password);

        this.props.history.push('/');

    };

    render = () =>
        <div className="container">

            {
                this.props.error &&
                <AlertComponent message={<><strong>Error! </strong> {this.props.error}</>}
                                alertType={'danger'}
                                clear={() => this.props.setError('')}/>
            }

            <h1>Sign In</h1>
            <div className="rounded border border-secondary bg-white">
                <div className="m-4">
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="username"
                                   placeholder="Alice"
                                   onChange={(e) => {
                                       this.setState({username: e.target.value})}
                                   }/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control wbdv-field wbdv-password"
                                   id="password" placeholder="123qwe#$%"
                                   onChange={(e) => {
                                       this.setState({password: e.target.value})}
                                   }/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-primary btn-block wbdv-login" onClick={this.login}>Sign in
                            </button>
                            <div className="row">
                                <div className="col-6">
                                    {/*<a href="#" className="wbdv-link wbdv-forgot-password">Forgot Password?</a>*/}
                                </div>
                                <div className="col-6">
                                    <Link className="float-right wbdv-link wbdv-register"
                                          to="/register">Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

}
export default LoginComponent;
