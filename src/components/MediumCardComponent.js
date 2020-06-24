import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faPencilAlt, faCheck, faBan, faFile, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import MediumListComponent from "./MediumListComponent";
import {Link} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import {faCheckCircle, faCircle} from "@fortawesome/free-regular-svg-icons";

const TVDBUrl = 'https://thetvdb.com';

class MediumCardComponent extends MediumListComponent {

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

    toggleSelected = () => {
        this.setState({selected: !this.state.selected})
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
                {
                    (this.state.hover || this.state.selected) &&
                    <>
                        <Tooltip title="Select" className={'float-left'}>
                            <IconButton aria-label="Add to watchlist" onClick={this.toggleSelected}>
                                <FontAwesomeIcon className={"color-white"} icon={this.state.selected ? faCheckCircle : faCircle} inverse={false}
                                                 size={"1x"}/>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Add to watchlist" className={'float-right'}>
                            <IconButton aria-label="Add to watchlist">
                                <FontAwesomeIcon className={"color-white"} icon={faPlusCircle} inverse={false} size={"1x"}/>
                            </IconButton>
                        </Tooltip>
                    </>
                }
            </div>
            {
                //<img className="card-img-top"
                //     src={`${TVDBUrl}${this.props.medium.image}`}
                //     alt="Card image cap"/>
            }
            <div className="card-body border-top">
                <div>
                    <Tooltip title={`${this.props.medium.title} (${new Date(this.props.medium.firstAired).getFullYear()})`}>
                        <Link to={`/details/${this.props.medium.tvdbId}`}>
                            <strong className="text-white">{this.props.medium.title} ({new Date(this.props.medium.firstAired).getFullYear()})</strong>
                        </Link>
                    </Tooltip>
                </div>
            </div>
        </div>
}


export default MediumCardComponent
