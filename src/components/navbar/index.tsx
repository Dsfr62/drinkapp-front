import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    function handleNav() {
        setNav(!nav);
    };

    //TODO: Define the icon of the options
    return (
        <div className="bg-firstBrown flex h-20 justify-between items-center p-6 text-white">
            <p className="font-semibold">Drink Logo</p>
            
            {
            !nav ? 
            <div className="flex">
                <p className="invisible md:visible md:mx-6 hover:bg-firstNuts hover:cursor-pointer hover:rounded-sm ease-linear transition-all"><Link to="drinks">Drinks</Link></p>
                <p className="invisible md:visible md:mx-6 hover:bg-firstNuts hover:cursor-pointer hover:rounded-sm ease-linear transition-all"><Link to="games">Games</Link></p>
                <p className="invisible md:visible md:ml-6 hover:bg-firstNuts hover:cursor-pointer hover:rounded-sm ease-linear transition-all"><Link to="profile">Profile</Link></p>
                <button className="visible md:invisible m-6 md:m-0 focus:outline-none focus:bg-firstNuts ease-linear transition-all" onClick={handleNav}>Click</button>
            </div>
            :
            <div className="flex flex-col">
                <button className="visible md:invisible focus:outline-none focus:bg-firstNuts ease-linear transition-all m-4 mt-40 animate-pulse" onClick={handleNav}>Close</button>
                <div className="bg-firstBrown flex flex-col items-center p-2 rounded">
                    <p className="border-t-2 border-firstNuts cursor-pointer ease-linear transition-all p-1.5 my-0.5"><Link to="drinks">Drinks</Link></p>
                    <p className="border-t-2 border-firstNuts cursor-pointer ease-linear transition-all p-1.5 my-0.5"><Link to="games">Games</Link></p>
                    <p className="border-t-2 border-firstNuts cursor-pointer ease-linear transition-all p-1.5 my-0.5"><Link to="profile">Profile</Link></p>
                </div>
            </div>
            }
        </div>
    );
};

export default Navbar;