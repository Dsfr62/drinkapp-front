import { Link } from "react-router-dom";
import { RankedProps } from "../../interfaces/ranked.props";

const Ranked = ({ title, likes, postedBy, postLink }:RankedProps) => {
    return (
        <div className="flex justify-between w-[100%]">
            <p className="my-1 w-[30%] md:w-[40%]"><Link to={postLink}>{title}</Link></p>
            <p className="my-1 w-[20%] md:w-[40%]">{likes}</p>
            <p className="my-1 w-[30%] md:w-[10%]">{postedBy}</p>
        </div>
    );
};

export default Ranked;