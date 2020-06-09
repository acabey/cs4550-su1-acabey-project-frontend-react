import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import MediaDisplayContainer from "./container/MediaDisplayContainer";

function WhatToWatch() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route
                    path='/'
                    exact={true}
                    component={MediaDisplayContainer}/>
            </BrowserRouter>
        </div>
);
}

export default WhatToWatch;
