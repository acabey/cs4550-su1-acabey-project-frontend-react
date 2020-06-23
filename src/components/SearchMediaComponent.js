import React from "react";
import MediumGridComponent from "./MediumGridComponent";
import userService from "../services/userService";
import AlertComponent from "./AlertComponent";

class SearchMediaComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () =>
        this.props.error ?
            <AlertComponent alertType={'danger'}
                            message={this.props.error.message}/>
            :
            <MediumGridComponent
                media={this.props.media}/>
}

export default SearchMediaComponent
