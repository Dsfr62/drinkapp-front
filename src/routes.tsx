import { Routes, Route } from "react-router-dom";
import DrinksPage from "./pages/drinks-page";
import HomePage from "./pages/home-page";

const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drinks" element={<DrinksPage />} />
        </Routes>

    );
};

export default AppRoutes;