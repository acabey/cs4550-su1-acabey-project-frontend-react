import React from "react";
import userService from "../services/userService";

class LogoutComponent extends React.Component {
    componentDidMount = () => {
        userService.logout()
            .then(() => {
                this.props.history.push('/')
            })
            .catch(() => {
                this.props.history.push('/')
            });
    };

    render = () => <></>
}

export default LogoutComponent;