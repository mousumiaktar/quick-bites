import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="">
            <div className="grid lg:grid-cols-12">
                <div className="col-start-1 col-end-3 bg-red-500 py-6">
                    <div className="">
                        <Link to="profile">
                            <h1 className="font-bold  p-2 px-6">
                                profile
                            </h1>
                        </Link>
                        <Link to="addreview">
                            <h1 className="font-bold  p-2 px-6">
                                Reviews
                            </h1>
                        </Link>
                        <Link to="myorder">
                            <h1 className="font-bold  p-2 px-6">
                                Orders
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