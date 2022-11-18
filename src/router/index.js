import { BrowserRouter, Routes, Route, Navigate, Outlet, useNavigate, Red } from "react-router-dom";

import LandingPage from "../pages/Landing";
import EventPage from "../pages/Event";

const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="trigger" replace/>}/>
                <Route exact path="trigger" element={<LandingPage/>}/>
                <Route path="trigger/event/:id" element={<EventPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;