import { Link } from "react-router-dom";
import EditProfileForm from "../../components/edit-profile-form";
import Navbar from "../../components/navbar"

const ProfilePage = () => {

    //Hook this info from useAuth hook.
    const user = {
        firstName: "Jhon",
        lastName: "Doe",
        email: "jhondoe@testmail.com",
        password: "jhon123",
        role: "Basic",
    };

    return (
        <div>
            <Navbar />
            <div className="p-6">
                <p>Hello, {user.firstName}!</p>
                <p>Do you want to see your posts?</p>
                <p className="p-1.5"><Link to="posts/drink">Drinks &#x1F378;</Link></p>
                <p className="p-1.5"><Link to="posts/game">Game &#x1F3AF;</Link></p>

                <p className="mt-2">Or do you want to see your saved posts?</p>
                <p>Yes? <span className="font-semibold"><Link to="posts/saved">Click here!</Link></span></p>
                
                {/* Later, we will have the users badges here. */}

                <p className="mt-6 mb-2">- No, I want to <span className="font-semibold">edit</span> my profile</p>
                <EditProfileForm />
            </div>

            {/* For pc users, profile page will have a roulette beside this div, for mobile users, it's going to be a click for a page*/}
        </div>
    );
};

export default ProfilePage;