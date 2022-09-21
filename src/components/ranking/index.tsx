
// TODO: Figure out how can I organize the ranking block 
// TODO: Figure out how can I fragment each post in the ranking
// TODO: Style each info to the click
const Ranking = () => {
    return (
        <>
            <div className="text-white">
                <p className="font-semibold mb-2.5 text-black">Top drinks</p>
                <div className="bg-firstBrown flex flex-col p-4 md:p-8 rounded-md">
                    <div className="flex justify-between mb-1 w-[100%]">
                        <p className="font-medium w-[30%] md:w-[40%]">Name</p>
                        <p className="font-medium w-[20%] md:w-[40%]">Likes</p>
                        <p className="font-medium w-[30%] md:w-[10%]">Posted By</p>
                    </div>
                    <div className="flex justify-between w-[100%]">
                        <p className="w-[30%] md:w-[40%]">Mojito</p>
                        <p className="w-[20%] md:w-[40%]">1000</p>
                        <p className="w-[30%] md:w-[10%]">Jhon Doe</p>
                    </div>
                    <div className="flex justify-between w-[100%]">
                        <p className="w-[30%] md:w-[40%]">Caipiroska</p>
                        <p className="w-[20%] md:w-[40%]">500</p>
                        <p className="w-[30%] md:w-[10%]">Jhon Doe</p>
                    </div>
                </div>
            </div>
            <div className="text-white mt-5">
                <p className="font-semibold mb-2.5 text-black">Top games</p>
                <div className="bg-firstBrown flex flex-col p-4 md:p-8 rounded-md">
                    <div className="flex justify-between mb-1 w-[100%]">
                        <p className="font-medium w-[30%] md:w-[40%]">Name</p>
                        <p className="font-medium w-[20%] md:w-[40%]">Likes</p>
                        <p className="font-medium w-[30%] md:w-[10%]">Posted By</p>
                    </div>
                    <div className="flex justify-between w-[100%]">
                        <p className="w-[30%] md:w-[40%]">Beer Pong</p>
                        <p className="w-[20%] md:w-[40%]">1500</p>
                        <p className="w-[30%] md:w-[10%]">Jhon Doe</p>
                    </div>
                    <div className="flex justify-between w-[100%]">
                        <p className="w-[30%] md:w-[40%]">Fifa Cirrose</p>
                        <p className="w-[20%] md:w-[40%]">1000</p>
                        <p className="w-[30%] md:w-[10%]">Jhon Doe</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ranking;