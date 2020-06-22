import React from "react";
import MediumGridComponent from "./MediumGridComponent";

class SearchMediaComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        if (this.props.params.match.title) {
            this.props.searchMedia(this.props.params.match.title)
        }
    };

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if (this.props.params.match.title !== prevProps.params.match.title) {
            this.props.searchMedia(this.props.params.match.title)
        }
    };

    render = () =>
        <MediumGridComponent
            media={this.props.media}/>
}

export default SearchMediaComponent
