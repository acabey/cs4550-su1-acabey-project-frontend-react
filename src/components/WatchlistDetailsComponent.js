import React from "react";
import {Container} from "react-bootstrap";
import NavContainer from "../container/NavContainer";
import MediumGridComponent from "./MediumGridComponent";
import userService from "../services/userService";
import WatchlistService from "../services/WatchlistService";
import {Link} from "react-router-dom";
import {faBan, faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class WatchlistDetailsComponent extends React.Component {

    state = {
        owner: null,
        isEditing: false
    };

    constructor(props) {
        super(props);
    }

    toggleEditing = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    componentDidMount = () => {
        this.props.setWatchlist(this.props.match.params.watchlistId);

        this.props.findMediaForWatchlist(this.props.match.params.watchlistId);

        userService.getUserById(this.props.watchlist.ownerId)
            .then((ownerResp) => {
                    if (ownerResp && !ownerResp.error) {
                        this.setState({owner: ownerResp});
                    } else {
                        console.error(`Failed to get user: ${ownerResp.error}`);
                    }
                }
            )
            .catch((error) => {
                console.error(`Failed to get user: ${error.toString()}`);
            })
    };

    render = () =>
        <Container fluid={false}>

            <NavContainer history={this.props.history} match={this.props.match}/>

            <span>
            {
                !this.state.isEditing ?
                    <span><h4>{this.props.watchlist.title}</h4></span>
                    :
                    <span>
                        <input className={"form-control"} type={"text"} />
                        <button className={"btn"} onClick={() => this.toggleEditing}>
                            <FontAwesomeIcon icon={this.state.isEditing ? faPencilAlt : faBan}/>
                        </button>
                    </span>
            }
            </span>
            <Link to={`/profile/${this.state.owner ? this.state.owner.username : ""}`}>
                <span className={"text-black font-italic"}>{this.state.owner ? this.state.owner.username : ""}</span>
            </Link>

            <MediumGridComponent media={this.props.media}/>


        </Container>
}

export default WatchlistDetailsComponent
