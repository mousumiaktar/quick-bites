import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div>
                <div className='bg-gray-900 w-56 h-screen relative  text-white'>
                    <AiOutlineArrowLeft className='absolute ml-52 text-black text-3xl bg-white border border-gray-800 rounded-full' />
                    <div>
                        <h3 className='text-2xl'>Logo</h3>
                    </div>
                    <div className='mt-5'>
                        <ul>
                            <li><Link to="/dashboard/orders">My Orders</Link></li>
                            <li><Link to="/dashboard/add-products">Add products</Link></li>

                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <Outlet />
            </div>

        </div>
    );
};

export default Dashboard;