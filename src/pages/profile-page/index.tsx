import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar"

const ProfilePage = () => {

    //Hook this info from useAuth hook.
    const user = {
        firstName: "Jhon",
        lastName: "Doe",
        email: "jhondoe@testmail.com",
        password: "jhon123",
        role: "Basic",
    }

    const { register, handleSubmit } = useForm();
    //TODO: Create interface for update user 
    const onSubmit = data => console.log(data);

    return (
        <div>
            <Navbar />
            <div className="p-6">
                <p>Hello, {user.firstName}!</p>
                <p>Do you want to see your posts?</p>
                <p className="p-1.5"><Link to="posts/drink">Drinks &#x1F378;</Link></p>
                <p className="p-1.5"><Link to="posts/game">Game &#x1F3AF;</Link></p>
                <p className="my-2">- No, I want to <span className="font-semibold">edit</span> my profile</p>
                {/* //TODO: Put this in a component */}
                <form className="w-[100%]" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="firstName" className="w-[30%]">First name</label>
                        <input className="border-2 border-firstNuts rounded-md ml-1 my-2 w-[70%] md:w-[20%]" defaultValue={user.firstName} {...register("firstName")} />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="w-[30%]">Last name</label>
                        <input className="border-2 border-firstNuts rounded-md ml-1 my-2 w-[70%] md:w-[20%]" defaultValue={user.lastName} {...register("lastName")} />
                    </div>
                    <div>
                        <label htmlFor="email" className="w-[20%]">Email</label>
                        <input className="border-2 border-firstNuts rounded-md ml-1 my-2 w-[81%] md:w-[23.5%]" defaultValue={user.email} {...register("email")} />
                    </div>
                    <div>
                        <label htmlFor="password" className="w-[20%]">Password</label>
                        <input className="border-2 border-firstNuts rounded-md ml-1 my-2 w-[72%] md:w-[20.5%]" defaultValue={user.password} {...register("password")} />
                    </div>
                    <button type="submit" className="bg-firstBrown text-white rounded-md p-1 font-semibold my-2 w-[100%] md:w-[27.5%]">Update</button>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;