import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faPencilAlt, faCheck, faBan, faFile} from '@fortawesome/free-solid-svg-icons'
import MediumListMediumComponent from "./MediumListMediumComponent";
import {Link} from "react-router-dom";

class MediumGridCardComponent extends MediumListMediumComponent {

    render = () =>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2">
            <div className={`card ${this.state.isSelected && 'bg-primary'}`}
                 onClick={() => this.toggleSelected()}>
                <img className="card-img-top"
                     src={this.props.medium.image}
                     alt="Card image cap"/>
                <div className="card-body">
                    <div>
                        <Link to={`/editor/${this.props.medium._id}`}
                              className={"text-dark"}>
                            <FontAwesomeIcon icon={faFile} className={"wbdv-row wbdv-icon mr-2"}/>
                            <span className="card-seriesName">{this.props.medium.seriesName}</span>
                        </Link>
                    </div>
                    <p className="card-text">{`Modified ${this.props.medium.banner}`}</p>

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
        </div>
}


export default MediumGridCardComponent
