import React from "react";

class LogoutComponent extends React.Component {
    componentDidMount = () => {
        this.props.logout();
        this.props.history.push('/')
    };

    render = () => <></>
}

export default LogoutComponent;