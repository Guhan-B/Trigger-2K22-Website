import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing";
import EventPage from "../pages/Event";

const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="event/:id" element={<EventPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;