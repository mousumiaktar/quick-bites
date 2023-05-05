import { NavLink, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="">
            <div className="grid lg:grid-cols-12">
                <div className="col-start-1 col-end-3 bg-black py-6">
                    <div className="">
                        <NavLink to="profile">
                            <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3 hover:bg-orange-500 mx-3 rounded-md duration-500">
                                profile
                            </h1>
                        </NavLink>

                        {!admin && (
                            <>

                                <NavLink to="myorder">
                                    <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3 hover:bg-orange-500 mx-3 rounded-md duration-500">
                                        Orders
                                    </h1>
                                </NavLink>


                                <NavLink to="addreview">
                                    <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3 hover:bg-orange-500 mx-3 rounded-md duration-500">
                                        Reviews
                                    </h1>
                                </NavLink>

                            </>
                        )}


                        {admin && (
                            <>
                                <NavLink to="addfood">
                                    <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3 hover:bg-orange-500 mx-3 rounded-md duration-500">
                                        Add Food
                                    </h1>
                                </NavLink>
                                <NavLink to="managefood">
                                    <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3 hover:bg-orange-500 mx-3 rounded-md duration-500">
                                        Manage Food
                                    </h1>
                                </NavLink>
                                <NavLink to="alluser">
                                    <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3 hover:bg-orange-500 mx-3 rounded-md duration-500">
                                        All User
                                    </h1>
                                </NavLink>
                            </>
                        )}

                        <NavLink to="allreviews">
                            <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3 hover:bg-orange-500 mx-3 rounded-md duration-500">
                               All reviews
                            </h1>
                        </NavLink>




                    </div>
                </div>
                <div className="col-start-4 col-end-12">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;