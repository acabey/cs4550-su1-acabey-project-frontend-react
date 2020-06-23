import React from "react";
import {Button, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV, faPlus, faPlusCircle} from "@fortawesome/free-solid-svg-icons";

class WatchlistBarComponent extends React.Component {

    render = () =>
        <Row>
            <button className={"btn"}>
                <FontAwesomeIcon icon={faEllipsisV}/>
            </button>

            <button className={"btn float-right"}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </Row>

}

export default WatchlistBarComponent;