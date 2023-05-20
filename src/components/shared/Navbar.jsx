import { useAuthState } from 'react-firebase-hooks/auth';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import auth from '../../firebase.init';
import { Link, NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import Logo from "../../images/logo.png"



const Navbar = () => {
    const [user] = useAuthState(auth);
    const list = useSelector((state) => state.cart);
    // console.log(list);


    const logout = () => {
        signOut(auth);
    };

    return (
        <div className="sticky top-0 z-[50]">
            <div className="relative z-20 border-b bg-white shadow-xl">
                <div className="px-6 lg:py-2">
                    <div className="flex items-center justify-between">
                        <div className="relative z-20">
                            <div className='flex items-center'>
                                <img className='h-[60px]' src={Logo} alt="" />
                                <h1 className="text-2xl font-bold py-2 text-red-500">Quick Bites</h1>
                            </div>
                        </div>

                        <div className="flex items-center justify-end border-l lg:border-l-0">
                            <input
                                type="checkbox"
                                name="hamburger"
                                id="hamburger"
                                className="peer"
                                hidden
                            />
                            <label
                                htmlFor="hamburger"
                                className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                            >
                                <div
                                    aria-hidden="true"
                                    className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                                ></div>
                                <div
                                    aria-hidden="true"
                                    className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                                ></div>
                            </label>

                            <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                                <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                                    <ul className="px-4 pt-32 text-gray-700 space-y-8 md:px-4 lg:space-y-0 lg:flex lg:space-x-6 lg:pt-0 font-bold">
                                        <NavLink to="home">
                                            <li>
                                                <div className="flex items-center ">
                                                    <span className="relative px-2 group-hover:text-cyan-800 text-2xl">
                                                        Home
                                                    </span>
                                                </div>
                                            </li>
                                        </NavLink>

                                        <NavLink to="blog">
                                            <li>
                                                <div className="flex items-center">
                                                    <span className="relative group-hover:text-cyan-800 text-2xl "></span>
                                                    <span className="relative px-2 group-hover:text-cyan-800 text-2xl ">
                                                        Blog
                                                    </span>
                                                </div>
                                            </li>
                                        </NavLink>




                                        {user ? (
                                            <>
                                                <NavLink to="cart">
                                                    <li className="">
                                                        <div className="flex items-center ">
                                                            <span className="relative mt-1 group-hover:text-cyan-800 text-2xl text-black">
                                                                <HiOutlineShoppingBag />
                                                            </span>
                                                            <span className='bg-red-500 px-2 rounded-full text-white mb-4'>{list?.length}</span>
                                                        </div>
                                                    </li>
                                                </NavLink>

                                                <NavLink>
                                                    <li>
                                                        <div className="flex items-center">
                                                            <span className="relative px-2  text-orange-500 text-2xl">
                                                                <Link to="dashboard">Dashboard</Link>
                                                            </span>
                                                        </div>
                                                    </li>
                                                </NavLink>

                                                <li>
                                                    <div className="flex items-center">
                                                        <span className="relative px-2   text-orange-500 text-2xl border border-orange-500 rounded-lg">
                                                            <Link onClick={logout}> Logout</Link>
                                                        </span>
                                                    </div>
                                                </li>
                                            </>
                                        ) : (
                                            <li>
                                                <div className="flex items-center">
                                                    <span className="relative px-2   text-red-500 text-2xl">
                                                        <Link to="login"> Login</Link>
                                                    </span>
                                                </div>
                                            </li>
                                        )}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;