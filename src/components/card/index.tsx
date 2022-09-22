import { useState } from "react";
import { Link } from "react-router-dom";
import { CardProps } from "../../interfaces/card.props";

const Card = ({ image, title, likes, is_liked, is_saved, author}: CardProps) => {
    const [like, setLike] = useState(is_liked);
    const [save, setSave] = useState(is_saved);


    function handleLike() {
        //TODO: When set this, update is_liked in context
        setLike(!like);
    };

    function handleSave() {
        //TODO: When set this, update is_saved in context
        setSave(!save);
    };

    //TODO: Make a report button for posts without image
    //TODO: Think how to do the profile routes.
    //TODO: Think how to do the post routes.
    //TODO: Find the idea resolution for card images and note -> To tell the users wich resolution is the best to upload pictures.

    return (
        <div className="border-2 border-firstBrown border-opacity-70 rounded-sm my-4 md:mx-2 p-3 w-[100%] md:w-[65%] h-128 md:h-128 max-w-lg">
        {image ? <img className="h-[80%] md:h-[85%] w-[100%]" src={image} alt="Image" /> : <p className="bg-firstGreen rounded-sm h-[75%] opacity-60">{title} picture</p>}
        <div className="m-2 h-[80%]">
            <div className="flex justify-between">
                <p className="font-semibold text-lg">{title}</p>
                <p>{likes} Likes</p>
            </div>
            <div className="flex justify-between">
                <button className={!like ? "" : "text-firstGreen"} onClick={handleLike}>{!like ? "Like" : "Liked"}</button>
                <p className={!save ? "" : "text-firstGreen"} onClick={handleSave}>{!save ? "Save" : "Saved"}</p>
            </div>
            <p className="text-sm italic"><Link to={"profile/" + author}>{author}</Link></p>
        </div>
    </div>
    );
};

export default Card;