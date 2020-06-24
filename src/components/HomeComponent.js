import React from "react";
import {Container} from "react-bootstrap";
import './HomeComponent.css'
import TopWatchlistContainer from "../container/TopWatchlistsContainer";
import SearchMediaContainer from "../container/SearchMediaContainer";
import NavContainer from "../container/NavContainer";

class HomeComponent extends React.Component {

    componentDidMount = () => {
        this.props.getProfile();
        if (this.props.user) {
            this.props.findWatchlistsForUser(this.props.user.id);
        }
    };

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if (prevProps !== this.props) {

            this.props.getProfile();
            if (this.props.user) {
                this.props.findWatchlistsForUser(this.props.user.id);
            }
        }
    };

    render = () =>
        <Container fluid={true}>

            <NavContainer history={this.props.history} match={this.props.match}/>

            {
                this.props.match.params.title ?
                    <SearchMediaContainer history={this.props.history} match={this.props.match}/>
                    :
                    <>
                        <h5 className={`text-secondary`}>Top Public Watchlists</h5>
                        <TopWatchlistContainer/>
                        {
                            this.props.user &&
                            <>
                                <h5 className={`text-secondary`}>My Watchlists</h5>
                                <TopWatchlistContainer/>
                            </>
                        }
                    </>
            }

        </Container>
}

export default HomeComponent
