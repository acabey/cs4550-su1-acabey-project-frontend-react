import React from "react";
import {Container} from "react-bootstrap";
import NavComponent from "./NavComponent";
import './HomeComponent.css'
import TopWatchlistContainer from "../container/TopWatchlistsContainer";

class HomeComponent extends React.Component {

    render = () =>
        <Container fluid={true}>

            <NavComponent searchTitleInputHandler={event => {this.setState({'searchTitle': event.target.value})}}
                          searchButtonInputHandler={this.props.searchButtonInputHandler}/>

            <span className={`text-secondary`}>Top Public Watchlists</span>
            <TopWatchlistContainer/>

        </Container>
}

export default HomeComponent
