import React from "react";
import {Container} from "react-bootstrap";
import './HomeComponent.css'
import TopWatchlistContainer from "../container/TopWatchlistsContainer";
import SearchMediaContainer from "../container/SearchMediaContainer";
import NavContainer from "../container/NavContainer";

class HomeComponent extends React.Component {

    render = () =>
        <Container fluid={true}>

            <NavContainer history={this.props.history} match={this.props.match}/>

            {
                this.props.match.params.title ?
                <SearchMediaContainer history={this.props.history} match={this.props.match}/>
                :
                <>
                    <span className={`text-secondary`}>Top Public Watchlists</span>
                    <TopWatchlistContainer/>
                </>
            }

        </Container>
}

export default HomeComponent
