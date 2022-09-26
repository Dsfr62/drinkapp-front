import { Routes, Route, useParams } from "react-router-dom";
import DrinksPage from "./pages/drinks-page";
import GamesPage from "./pages/games-page";
import HomePage from "./pages/home-page";
import PostPage from "./pages/post-page";
import ProfilePage from "./pages/profile-page";

const AppRoutes = () => {

    const { postId } = useParams();

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drinks" element={<DrinksPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            <Route path="/posts/:postId" element={<PostPage />} />
        </Routes>

    );
};

export default AppRoutes;