import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="">
            <div className="grid lg:grid-cols-12">
                <div className="col-start-1 col-end-3 bg-black py-6">
                    <div className="">
                        <Link to="profile">
                            <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3">
                                profile
                            </h1>
                        </Link>
                        <Link to="addreview">
                            <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3">
                                Reviews
                            </h1>
                        </Link>
                        <Link to="myorder">
                            <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3">
                                Orders
                            </h1>
                        </Link>
                        <Link to="addrestaurant">
                            <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3">
                                Add Restaurants
                            </h1>
                        </Link>
                        <Link to="managefood">
                            <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3">
                                Manage Food
                            </h1>
                        </Link>
                        <Link to="makeadmin">
                            <h1 className="font-bold  p-2 px-6 text-white text-xl mb-3">
                                Make Admin
                            </h1>
                        </Link>
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