import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/LoginComponent";
import ProfileEditComponent from "./components/ProfileEditComponent";
import RegisterComponent from "./components/RegisterComponent";
import SearchMediaContainer from "./container/SearchMediaContainer";
import LoginContainer from "./container/LoginContainer";

function WhatToWatch() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route
                    path={['/', '/search', '/logout']}
                    exact={true}
                    component={HomeComponent}/>
                <Route
                    path='/search/:title'
                    exact={true}
                    component={HomeComponent}/>
                <Route
                    path='/login'
                    exact={true}
                    component={LoginContainer}/>
                <Route
                    path='/register'
                    exact={true}
                    component={RegisterComponent}/>
                <Route
                    path='/profile'
                    exact={true}
                    component={ProfileEditComponent}/>
            </BrowserRouter>
        </div>
);
}

export default WhatToWatch;
