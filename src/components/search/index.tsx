import { useState } from "react";


const SearchBar = () => {
    const [search, setSearch] = useState("");

    //TODO: Implementation with backend
    function handleSearch() {
        //Implement later
        alert(search);
    };

    return (
        <div className="flex mb-4 w-[100%] md:w-[60%] max-w-2xl">
            <input type="text" name="drink-search" 
                className="border-2 border-firstBrown rounded-md mr-1.5 p-0.5 w-[80%] md:w-[40%] focus:outline-none focus:border-firstNuts ease-linear transition-all"
                onChange={(event) => setSearch(event.target.value)}/>
            <button type="button" className="bg-firstBrown rounded-md text-white font-semibold p-1 w-[20%] md:w-[10%] hover:bg-firstNuts ease-linear transition-all" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;