import React from "react";
import {Container} from "react-bootstrap";
import NavContainer from "../container/NavContainer";
import MediumGridComponent from "./MediumGridComponent";

class WatchlistDetailsComponent extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.findMediaForWatchlist(this.props.match.params.watchlistId);
    };

    render = () =>
        <Container fluid={false}>

            <NavContainer history={this.props.history} match={this.props.match}/>

            <MediumGridComponent media={this.props.media}/>


        </Container>
}

export default WatchlistDetailsComponent
