import React from "react";
import MediumGridComponent from "./MediumGridComponent";

class SearchMediaComponent extends React.Component {

    constructor(props) {
        super(props);

        //this.tvdbClient = new TVDBClient();
        const TVDB = require('node-tvdb');
        this.tvdb = new TVDB('e5094420c444a38c3b46f926de91dde3');

    }

    componentDidMount = () => {
        this.props.searchMedia('Star Wars')
    };

    componentDidUpdate = (prevProps, prevState, snapshot) => {
    };

    render = () =>
        <MediumGridComponent
            media={this.state.media}/>
}

export default SearchMediaComponent
