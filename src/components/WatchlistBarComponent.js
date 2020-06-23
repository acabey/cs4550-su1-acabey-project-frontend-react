import React from "react";
import {Button, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV, faPlus, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import Link from "@material-ui/core/Link";

class WatchlistBarComponent extends React.Component {

    render = () =>
        <Row>
            {
                this.props.profile ?
                    <>
                        <button className={"btn"}>
                            <FontAwesomeIcon icon={faEllipsisV}/>
                        </button>

                        <button className={"btn float-right"}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                    </>
                    :
                    <>
                        <Link to={"/login"} className={"ml-2 text-color-primary"}>
                            <h5>Sign in to add to watchlists!</h5>
                        </Link>
                    </>
            }
        </Row>

}

export default WatchlistBarComponent;