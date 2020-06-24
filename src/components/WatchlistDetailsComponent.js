import React from "react";
import {Container} from "react-bootstrap";
import NavContainer from "../container/NavContainer";
import MediumGridComponent from "./MediumGridComponent";
import userService from "../services/userService";
import WatchlistService from "../services/WatchlistService";
import {Link} from "react-router-dom";
import {faBan, faCheck, faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class WatchlistDetailsComponent extends React.Component {

    state = {
        owner: null,
        isEditing: false,
        updatedTitle: ''
    };

    constructor(props) {
        super(props);
    }

    toggleEditing = () => {
        if (!this.state.isEditing) {
            this.setState({
                isEditing: !this.state.isEditing,
                updatedTitle: this.props.watchlist.title
            })
        } else {
            this.setState({
                isEditing: !this.state.isEditing,
            });
            this.save();
        }
    };

    save = () => {
        this.props.updateWatchlist(this.props.match.params.watchlistId, {
            ...this.props.watchlist,
            title: this.state.updatedTitle
        })
    };

    componentDidMount = () => {

        if (!this.props.watchlist) {
            this.props.setWatchlist(this.props.match.params.watchlistId);
        }

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
                    <span><input className={"form-control"}
                                 type={"text"}
                                 value={this.state.updatedTitle}
                                 onChange={(e) => {
                                     this.setState({updatedTitle: e.target.value})}
                                 }/></span>
            }
                <button className={"btn"} onClick={this.toggleEditing}>
                    <FontAwesomeIcon icon={this.state.isEditing ? faCheck : faPencilAlt }/>
                </button>
            </span>
            <Link to={`/profile/${this.state.owner ? this.state.owner.username : ""}`}>
                <span className={"text-black font-italic"}>{this.state.owner ? this.state.owner.username : ""}</span>
            </Link>

            <MediumGridComponent media={this.props.media}/>


        </Container>
}

export default WatchlistDetailsComponent
