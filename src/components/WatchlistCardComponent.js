import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import {faCheckCircle, faCircle} from "@fortawesome/free-regular-svg-icons";

const TVDBUrl = 'https://thetvdb.com';

class WatchlistCardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            selected: false
        }
    }

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
                    <Tooltip title={`${this.props.watchlist.owner}`}>
                        <Link to={`/watchlists/${this.props.watchlist.id}`}>
                            <strong className="text-white">{this.props.watchlist.title}})</strong>
                        </Link>
                    </Tooltip>
                </div>
            </div>
        </div>
}


export default WatchlistCardComponent
