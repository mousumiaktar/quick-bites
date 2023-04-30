import { Link, Outlet } from "react-router-dom";
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
                        <Link to="profile">
                            <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3 hover:bg-orange-400 mx-3 rounded-md duration-500">
                                profile
                            </h1>
                        </Link>

                        {!admin && (
                            <>

                                <Link to="myorder">
                                    <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3 hover:bg-orange-400 mx-3 rounded-md duration-500">
                                        Orders
                                    </h1>
                                </Link>


                                <Link to="addreview">
                                    <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3 hover:bg-orange-400 mx-3 rounded-md duration-500">
                                        Reviews
                                    </h1>
                                </Link>

                            </>
                        )}


                        {admin && (
                            <>
                                <Link to="addfood">
                                    <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3 hover:bg-orange-400 mx-3 rounded-md duration-500">
                                        Add Food
                                    </h1>
                                </Link>
                                <Link to="managefood">
                                    <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3 hover:bg-orange-400 mx-3 rounded-md duration-500">
                                        Manage Food
                                    </h1>
                                </Link>
                                <Link to="alluser">
                                    <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3 hover:bg-orange-400 mx-3 rounded-md duration-500">
                                        All User
                                    </h1>
                                </Link>
                            </>
                        )}




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