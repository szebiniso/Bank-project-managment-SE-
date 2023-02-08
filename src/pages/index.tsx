import React, { lazy } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, Navigate
} from "react-router-dom";
import Registration from "./Registration";
import Auth from "./Auth";
import MainPage from "./MainPage";

// const TestPage = lazy(() => import("./test"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/login" element={<Auth/>} />
            <Route path="/registration" element={<Registration/>} />
            {/*<Navigate to="/" />*/}
        </Routes>
    );
};