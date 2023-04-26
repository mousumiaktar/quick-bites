import auth from "../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const Profile = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="p-6">
            <div className="flex justify-center items-center">
                <div>
                    <h1 className="font-bold text-4xl">Hey!!!</h1>
                    <h3 className="font-bold text-4xl text-red-500">{user?.displayName}</h3>
                    <p className="text-2xl text-orange-600">These is your Profile</p>
                    <h4 className="font-bold text-xl">Name: {user?.displayName}</h4>
                    <h4 className="font-bold text-xl">Email: {user?.email}</h4>
                </div>
            </div>
        </div>
    );
};

export default Profile;