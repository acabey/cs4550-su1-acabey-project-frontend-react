import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import ProfileEditComponent from "./components/ProfileEditComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginContainer from "./container/LoginContainer";
import LogoutContainer from "./container/LogoutContainer";
import HomeContainer from "./container/HomeContainer";
import DetailsContainer from "./container/DetailsContainer";

function WhatToWatch() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route
                    path={['/', '/search']}
                    exact={true}
                    component={HomeContainer}/>
                <Route
                    path={'/logout'}
                    exact={true}
                    component={LogoutContainer}/>
                <Route
                    path='/search/:title'
                    exact={true}
                    component={HomeContainer}/>
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
                <Route
                    path='/details/:mediaId'
                    exact={true}
                    component={DetailsContainer}/>
            </BrowserRouter>
        </div>
);
}

export default WhatToWatch;
