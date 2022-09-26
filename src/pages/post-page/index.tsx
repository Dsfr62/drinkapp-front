import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import data from "../../api/rankedsList.json";
import { useEffect, useState } from "react";
import { RankedProps } from "../../interfaces/ranked.props";

const defaultPost: RankedProps = {
    title: "Error",
    likes: 0,
    postedBy: "Report this bug",
    postLink: "This is a bug"
}

const PostPage = () => {
    const [post, setPost] = useState(defaultPost);
    const { postId } = useParams();

    //TODO: Better way to do this verification
    function findPost() {
        try {
            const getDrinkPost = data.drinkRankeds.find(item => item.postId == postId);
            if(getDrinkPost) {
                return setPost(getDrinkPost);
            };
            const getGamePost = data.gameRankeds.find(item => item.postId == postId);
            if(getGamePost) {
                return setPost(getGamePost);
            };
        } catch(err) {
            console.log("Post doesn't exist");
        };
    };

    useEffect(() => {
        findPost();
    }, []);


    //TODO: Make a beautiful post doesn't exists component
    return (
        <div>
            <Navbar />
            {
                post.title == "Error" ?
                <p>Post doesn't exists</p>
                :
                <div>
                    <p>{post.title}</p>
                    <p>{post.likes}</p>
                    <p>{post.postedBy}</p>
                </div>
            }
        </div>
    );
};

export default PostPage;