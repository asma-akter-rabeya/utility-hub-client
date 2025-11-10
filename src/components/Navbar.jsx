import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    // managing the theme:
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])


    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
    }
    // logout
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('You logged out successfully')
            }).catch((error) => {
                toast.error(error.message);
            });
    };

    const links = (
        <>
            <li><NavLink to="/" className='btn-primary'>Home</NavLink></li>
            <li><NavLink to="/page/bills" className='btn-primary'>Bills</NavLink></li>
            {user && (
                <>
                    <li><NavLink to="/page/myPayBills" className='btn-primary'>My PayBills</NavLink></li>
                    <li>
                        <NavLink to="/page/profile">
                            <div className="w-9 h-9 rounded-full overflow-hidden ">
                                <img
                                    alt="User avatar"
                                    referrerPolicy="no-referrer"
                                    src={
                                        user.photoURL ||
                                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    }
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar px-6 py-3 bg-gradient-600 shadow-md text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-indigo-700 rounded-box w-52 text-white space-y-2">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold text-white">
                    My Utility<span className="text-yellow-300">Hub</span>
                </Link>
            </div>

            <div className="navbar-end hidden lg:flex items-center space-x-4">
                <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-4">
                    {links}
                </ul>
                {user ? (
                    <button onClick={handleLogOut} className='btn-primary '>
                        Log out
                    </button>
                ) : (
                    <>
                        <Link to="/page/login" className='btn-primary'>
                            Log in
                        </Link>
                        <Link to="/page/register" className='btn-primary'>
                            Register
                        </Link>
                    </>
                )}
                {/* theme controller */}

                <div className='ml-1.5 flex items-center gap-2'>
                    <span className="text-sm">🌞</span>
                    <input
                        onChange={(e) => handleTheme(e.target.checked)}
                        type="checkbox"
                        defaultChecked={localStorage.getItem('theme') === "dark"}
                        className="toggle" />
                    <span className="text-sm">🌙</span>
                </div>
            </div>


        </div>
    );
};

export default Navbar;
