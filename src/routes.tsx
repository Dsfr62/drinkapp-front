import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";

const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>

    );
};

export default AppRoutes;