import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const AlertComponent = ({alertType, message, clear}) =>
    <div className={`alert alert-${alertType}`}>
        {message}
        <button className={"float-right btn"} onClick={clear}>
            <FontAwesomeIcon icon={faTimes}/>
        </button>
    </div>

export default AlertComponent
