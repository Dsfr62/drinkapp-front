import { useState } from "react";
import Navbar from "../../components/navbar"

const DrinksPage = () => {
    const [like, setLike] = useState(false);
    const [save, setSave] = useState(false);
    const [search, setSearch] = useState("");

    function handleLike() {
        setLike(!like);
    };

    function handleSave() {
        setSave(!save);
    };

    function handleSearch() {
        //Implement later
        alert(search);
    };

    //TODO: Define a max width for search component and for drink card
    //TODO: Review the info of a drink post before define it in a component
    return (
        <div>
            <Navbar />
            <div className="p-6">
                <p>Great, drink day!</p>
                <p>We have a few drinks below &#128516;</p>
                <p className="mt-8 md:mt-4 mb-1">Try to find a drink with his name</p>
                {/* TODO: Transform this in a component */}
                <div className="flex mb-4 w-[100%] md:w-[60%]">
                    <input type="text" name="drink-search" className="border-2 border-firstBrown rounded-md mr-1.5 p-0.5 w-[80%] md:w-[40%] focus:outline-none focus:border-firstNuts ease-linear transition-all" onChange={(event) => setSearch(event.target.value)}/>
                    <button type="button" className="bg-firstBrown rounded-md text-white font-semibold p-1 w-[20%] md:w-[10%] hover:bg-firstNuts ease-linear transition-all" onClick={handleSearch}>Search</button>
                </div>
                {/* TODO: Transform this in a component */}
                <div className="border-2 border-firstBrown border-opacity-70 rounded-sm my-4 p-3 w-[100%] md:w-[65%] h-72">
                    <p className="bg-firstGreen rounded-sm h-[70%] opacity-60"></p>
                    <div className="m-2 h-[50%]">
                        <div className="flex justify-between">
                            <p className="font-semibold text-lg">Mojito</p>
                            <p>1000 likes</p>
                        </div>
                        <div className="flex justify-between">
                            <button className={!like ? "" : "text-firstGreen"} onClick={handleLike}>{!like ? "Like" : "Liked"}</button>
                            <p className={!save ? "" : "text-firstGreen"} onClick={handleSave}>{!save ? "Save" : "Saved"}</p>
                        </div>
                        <p className="text-sm italic">Jhon Doe</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrinksPage;