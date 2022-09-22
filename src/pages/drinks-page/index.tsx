import Card from "../../components/card";
import Navbar from "../../components/navbar"
import SearchBar from "../../components/search";


const DrinksPage = () => {


    return (
        <div>
            <Navbar />
            <div className="p-6">
                <p>Great, drink day!</p>
                <p>We have a few drinks below &#128516;</p>
                <p className="mt-8 md:mt-4 mb-1">Try to find a drink with his name</p>
                
                <SearchBar />
                <div className="flex flex-col md:flex-row md:justify-between">
                    <Card image={'./src/assets/drink-images/beer.jpg'} title="Beer" likes={1500} is_liked={false} is_saved={false} author="Jhon Doe"/>
                    <Card image={'./src/assets/drink-images/wine.jpg'} title="Wine" likes={1000} is_liked={false} is_saved={false} author="Jhon Doe"/>
                </div>
            </div>
        </div>
    );
};

export default DrinksPage;