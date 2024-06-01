import {Link} from "react-router-dom";
import AuthUser from "./AuthUser";
import Login from "../Pages/Auth/Login";

export default function Navbar() {
    const {getToken} = AuthUser();
    if (!getToken()) {
        return <Login/>
    }
    const {token, logout} = AuthUser();
    const logoutUser = () => {
        if (token !== undefined) {
            logout();
        }
    }
    return (
        <>
            <nav
                className="block w-full max-w-screen-xl px-4 py-2 mx-auto text-white bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
                <ul className="container flex items-center justify-between mx-auto text-blue-gray-900">
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <li className="p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-900">
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-900">
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-900">
                                <Link to="/example">
                                    Example
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex items-center gap-x-1">
                        <li className="p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-900">
                            <span role="button" onClick={logoutUser}>Logout</span>
                        </li>
                        <li className="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </ul>
            </nav>
        </>
    );
}
