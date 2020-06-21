import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faPencilAlt, faCheck, faBan, faFile} from '@fortawesome/free-solid-svg-icons'
import MediumListComponent from "./MediumListComponent";
import {Link} from "react-router-dom";

const TVDBUrl = 'https://thetvdb.com';

class MediumCardComponent extends MediumListComponent {

    render = () =>
        <div className={`card ${this.state.isSelected && 'bg-primary'}`}
             onClick={() => this.toggleSelected()}>
            {
                //<img className="card-img-top"
                //     src={`${TVDBUrl}${this.props.medium.image}`}
                //     alt="Card image cap"/>
            }
            {
                <img className="card-img-top" src="http://thetvdb.com/banners/posters/83268-1_t.jpg" alt="Card image cap"/>
            }
            {
                //<img className="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372" alt="Card image cap"/>
            }
            <div className="card-body">
                <div>
                    <Link to={`/editor/${this.props.medium._id}`}
                          className={"text-dark"}>
                        <FontAwesomeIcon icon={faFile} className={"wbdv-row wbdv-icon mr-2"}/>
                        <span className="card-seriesName">{this.props.medium.seriesName}</span>
                    </Link>
                </div>
                <p className="card-text">{this.props.medium.overview}</p>

                <div>
                    <button onClick={(event) => this.toggleEditing()}
                            className="btn wbdv-button wbdv-edit float-left">
                        <FontAwesomeIcon icon={faPencilAlt}/>
                    </button>
                    <button onClick={(event) => this.props.deleteMedium(this.props.medium)}
                            className="btn wbdv-button wbdv-delete float-right">
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </div>
            </div>
        </div>
}


export default MediumCardComponent
