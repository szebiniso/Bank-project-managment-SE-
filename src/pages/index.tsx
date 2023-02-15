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
            <Route path="/main_page" element={<MainPage/>} />
            <Route path="/" element={<Auth/>} />
            <Route path="/registration" element={<Registration/>} />
            {/*<Navigate to="/" />*/}
        </Routes>
    );
};