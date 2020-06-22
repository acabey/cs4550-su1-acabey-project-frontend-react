import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/LoginComponent";
import ProfileComponent from "./components/ProfileComponent";
import RegisterComponent from "./components/RegisterComponent";
import SearchMediaContainer from "./container/SearchMediaContainer";

function WhatToWatch() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route
                    path='/'
                    exact={true}
                    component={HomeComponent}/>
                <Route
                    path='/search'
                    exact={true}
                    component={HomeComponent}/>
                <Route
                    path='/search/:title'
                    exact={true}
                    component={HomeComponent}/>
                <Route
                    path='/login'
                    exact={true}
                    component={LoginComponent}/>
                <Route
                    path='/register'
                    exact={true}
                    component={RegisterComponent}/>
                <Route
                    path='/profile'
                    exact={true}
                    component={ProfileComponent}/>
            </BrowserRouter>
        </div>
);
}

export default WhatToWatch;
