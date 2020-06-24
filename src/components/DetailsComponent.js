import React from "react";
import {Container} from "react-bootstrap";
import './HomeComponent.css'
import NavContainer from "../container/NavContainer";
import WatchlistBarContainer from "../container/WatchlistBarContainer";

class HomeComponent extends React.Component {

    state = {
        medium: null
    };

    componentDidMount = () => {
        this.props.getProfile();
        if (this.props.user) {
            this.props.findWatchlistsForUser(this.props.user.id);
        }

        this.setState({medium: this.props.media.selectedMedia[0]});

    };

    render = () =>
        <Container fluid={false}>

            <NavContainer history={this.props.history} match={this.props.match}/>

            <div className={"row"}>
                <img src={this.state.medium.imageUrl} alt={"Image alt"}/>
            </div>

            <div className={"row"}>
                <h2>{this.state.medium.title}</h2>
                <span>{this.state.medium.title}</span>
            </div>

            <div className={"row"}>
                <span>{this.state.medium.description}</span>
            </div>

            <WatchlistBarContainer/>

        </Container>
}

export default HomeComponent
