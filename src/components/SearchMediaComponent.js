import React from "react";
import MediumGridComponent from "./MediumGridComponent";
import userService from "../services/userService";
import AlertComponent from "./AlertComponent";

class SearchMediaComponent extends React.Component {

    state = {
        errorMessage: ''
    };

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        if(!this.props.media) {
            console.error(`Invalid response from server on search`)
        }
        else if (this.props.media.error) {
            this.setState({errorMessage: this.props.media.message})
        }
    };

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if (this.props.match.params.title !== prevProps.match.params.title) {
            if(!this.props.media) {
                console.error(`Invalid response from server on search`)
            }
            else if (this.props.media.error) {
                this.setState({errorMessage: this.props.media.message})
            }
        }

    };

    render = () =>
        this.state.errorMessage ?
            <AlertComponent alertType={'danger'}
                            message={this.state.errorMessage}
                            clear={() => {this.setState({errorMessage: ''})}}/>
            :
            <MediumGridComponent
                media={this.props.media}/>
}

export default SearchMediaComponent
