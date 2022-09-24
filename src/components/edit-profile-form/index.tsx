import { useForm } from "react-hook-form";
import { UpdateProfileInterface } from "../../interfaces/update-profile.interface";

const EditProfileForm = () => {
    
    const { register, handleSubmit } = useForm();
    
    //TODO: Create interface for update user 
    const onSubmit = (data: UpdateProfileInterface) => console.log(data);

    //Hook this info from useAuth hook.
    const user = {
        firstName: "Jhon",
        lastName: "Doe",
        email: "jhondoe@testmail.com",
        password: "jhon123",
        role: "Basic",
    };
    
    return (
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
    );
};

export default EditProfileForm;