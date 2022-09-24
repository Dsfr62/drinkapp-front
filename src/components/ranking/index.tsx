
// TODO: Figure out how can I organize the ranking block 
// TODO: Figure out how can I fragment each post in the ranking
// TODO: Style each info to the click

import { RankedProps } from "../../interfaces/ranked.props";
import Ranked from "../ranked";
import { RankingProps } from "../../interfaces/ranking.props";

const Ranking = ({ rankeds }:RankingProps) => {

    const rankedsList = rankeds;

    return (
        <>
            <div className="text-white">
                <p className="font-semibold my-2 text-black">Top drinks</p>
                <div className="bg-firstBrown flex flex-col p-4 md:p-8 rounded-md">
                    <div className="flex justify-between mb-1 w-[100%]">
                        <p className="font-medium w-[30%] md:w-[40%]">Name</p>
                        <p className="font-medium w-[20%] md:w-[40%]">Likes</p>
                        <p className="font-medium w-[30%] md:w-[10%]">Posted By</p>
                    </div>

                    {rankedsList.map((ranked: RankedProps) => (
                        <Ranked title={ranked.title} likes={ranked.likes} postedBy={ranked.postedBy} postLink={ranked.postLink}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Ranking;