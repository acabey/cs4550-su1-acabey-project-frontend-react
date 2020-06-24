import React from "react";
import {Container} from "react-bootstrap";
import './HomeComponent.css'
import TopWatchlistContainer from "../container/TopWatchlistsContainer";
import SearchMediaContainer from "../container/SearchMediaContainer";
import NavContainer from "../container/NavContainer";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faCircle} from "@fortawesome/free-regular-svg-icons";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

class HomeComponent extends React.Component {

    componentDidMount = () => {
        this.props.getProfile();
        if (this.props.user) {
            this.props.findWatchlistsForUser(this.props.user.id);
        }
    };

    createWatchlist = () => {
        this.props.createWatchlist(this.props.user.id, {
            title: 'New Watchlist'
        })
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
                                <Tooltip title="Create new watchlist" className={'float-left'}>
                                    <IconButton aria-label="Create new watchlist" onClick={() => this.createWatchlist()}>
                                        <FontAwesomeIcon className={"color-mute-tertiary"} icon={faPlusCircle} inverse={false}
                                                         size={"2x"}/>
                                    </IconButton>
                                </Tooltip>
                            </>
                        }
                    </>
            }

        </Container>
}

export default HomeComponent
