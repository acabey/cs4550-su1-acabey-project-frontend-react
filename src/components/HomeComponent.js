import React from "react";
import {Container} from "react-bootstrap";
import NavComponent from "./NavComponent";
import './HomeComponent.css'
import TopWatchlistContainer from "../container/TopWatchlistsContainer";
import SearchMediaContainer from "../container/SearchMediaContainer";

class HomeComponent extends React.Component {

    render = () =>
        <Container fluid={true}>

            <NavComponent history={this.props.history}/>

            {
                this.props.match.params.title ?
                <SearchMediaContainer history={this.props.history}/>
                :
                <>
                    <span className={`text-secondary`}>Top Public Watchlists</span>
                    <TopWatchlistContainer/>
                </>
            }

        </Container>
}

export default HomeComponent
