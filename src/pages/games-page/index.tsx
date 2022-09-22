import Card from "../../components/card";
import Navbar from "../../components/navbar"
import SearchBar from "../../components/search";


const GamesPage = () => {
    return (
        <div>
            <Navbar />
            <div className="p-6">
                <p>Great, game day!</p>
                <p>We have a few games below &#128516;</p>
                <p className="mt-8 md:mt-4 mb-1">Try to find a game here</p>
                
                <SearchBar />
                <div className="flex flex-col md:flex-row md:justify-between">
                    <Card image={'./src/assets/game-images/madrid.jpg'} title="Madrid" likes={1500} is_liked={false} is_saved={false} author="Jhon Doe"/>
                    <Card image={'./src/assets/game-images/op.jpg'} title="One Piece" likes={1000} is_liked={false} is_saved={false} author="Jhon Doe"/>
                </div>
            </div>
        </div>
    );
};

export default GamesPage;