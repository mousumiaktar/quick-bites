import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Logo from "../../../images/logo.png"

const Welcome = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='h-screen py-6'>
            <div>
                <h2 className="text-2xl font-bold text-center mt-5">Hey, {user?.displayName}!!</h2>
                <div className="flex justify-center">
                    <h1 className='text-4xl text-center mt-4 shadow-lg inline py-6 px-4 rounded-lg'>Welcome to Dashboard</h1>
                </div>
                <div className="flex justify-center items-center mt-16 ">
                    <img className="h-[80px]" src={Logo} alt="" />
                    <h1 className="text-3xl font-bold ">Quick Bites</h1>
                </div>
            </div>
        </div>
    );
};

export default Welcome;