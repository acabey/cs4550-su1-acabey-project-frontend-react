import React from "react";
import {Link} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import userService from "../services/userService";

const TVDBUrl = 'https://thetvdb.com';

class WatchlistCardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            owner: null
        }
    }

    componentDidMount = () => {
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

    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    };

    getImage = () => "https://thetvdb.com/banners/posters/83268-1_t.jpg"


    render = () =>
        <div className={`bg-mute-tertiary`}
             onMouseEnter={this.toggleHover}
             onMouseLeave={this.toggleHover}>
            <div className={'card-img-top vh-20'} style={{
                "background-image": `url("${this.getImage()}")`,
                "background-repeat": "no-repeat",
                "background-position": "contain contain",
                "background-size": "100% 100%"
            }}>
            </div>
            {
                //<img className="card-img-top"
                //     src={`${TVDBUrl}${this.props.watchlist.image}`}
                //     alt="Card image cap"/>
            }
            <div className="card-body border-top">
                <div>
                    <Tooltip title={`${this.state.owner ? this.state.owner.username : this.props.watchlist.id}`}>
                        <Link to={`/watchlists/${this.props.watchlist.id}`}>
                            <strong className="text-white">{this.props.watchlist.title}</strong>
                        </Link>
                    </Tooltip>
                </div>
            </div>
        </div>
}


export default WatchlistCardComponent
