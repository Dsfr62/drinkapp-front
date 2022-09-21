import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
import Ranking from "../../components/ranking";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="p-6">
                <p className="font-semibold">Hello, my friend!</p>
                <p className="mb-2">What do you want to do today?</p>
                <p className="cursor-pointer rounded-md w-fit p-1.5 ease-linear transition-all hover:rounded-md hover:bg-firstGreen hover:font-semibold hover:text-white"><Link to="drinks">Drinks &#x1F378;</Link></p>
                <p className="cursor-pointer rounded-md w-fit p-1.5 ease-linear transition-all mt-1 hover:rounded-md hover:bg-firstGreen hover:font-semibold hover:text-white"><Link to="games">Games &#x1F3AF;</Link></p>
            </div>
            <div className="p-6">
                <Ranking />
            </div>
        </div>
    );
};

export default HomePage;