import auth from "../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';
const Profile = () => {
    const [user] = useAuthState(auth);
    // const [user, loading, error] = useAuthState(auth);
    const [userInfo] = useState({});
    const navigate = useNavigate();
    console.log("userdetails", userInfo);

    const updateUserProfile = () => {
        navigate("/dashboard/updateprofile")
    }


    return (
        <div className='h-[100vh]'>
            <div>
                <div className='w-[70%] mx-auto'>
                    <div className='shadow-xl rounded-md mt-12 py-4 px-4 lg:px-12 md:px-12'>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className="font-bold text-xl">Hey!!!</h1>
                                <h3 className="font-bold text-2xl ">{user?.displayName}</h3>
                                <p className="text-xl text-orange-600">These is your Profile</p>
                            </div>
                            <div onClick={() => updateUserProfile()} className='flex items-center font-bold text-red-500 cursor-pointer'>
                                <FaRegEdit />
                                <p className='ml-1'>Edit</p>
                            </div>
                        </div>
                        <div className='lg:flex md:flex gap-8 mt-4'>
                            <div className=''>
                                {/* <img className='h-24 w-24 rounded-full' src="" alt="" /> */}
                                <div className='h-24 w-24 rounded-full bg-black border-4 '>
                                    <h1 className="text-[55px] text-center font-bold text-orange-400 ">{user?.displayName[0].toUpperCase()}</h1>
                                </div>
                                <button onClick={() => updateUserProfile()} className='px-2 py-2 bg-orange-400 hover:bg-orange-500 duration-300 rounded-md  mt-4'>Edit profile</button>
                            </div>
                            <div className='mt-2 lg:ml-8 md:ml-8 font-bold'>
                                <small>Name:</small>
                                <p className='mb-2'>{user?.displayName}</p>
                                <small>Email:</small>
                                <p className='mb-2'>{user?.email}</p>
                                <small>Address:</small>
                                <p className='mb-2'>-------</p>
                                <small>Phone:</small>
                                <p className='mb-2'>--------</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    );
};

export default Profile;