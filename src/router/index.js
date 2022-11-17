import { BrowserRouter, Routes, Route, Navigate, Outlet, useNavigate } from "react-router-dom";

import LandingPage from "../pages/Landing";
import EventPage from "../pages/Event";

const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/events/:id" element={<EventPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;