import {useState} from "react";
import AuthUser from "../../Components/AuthUser";

export default function Login() {
    const {http, setToken} = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = () => {
        http.post('auth/login', { email: email, password: password })
            .then((res) => {
                setToken(res.data.user, res.data.accessToken); // Call setToken from AuthUser
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 bg-white rounded-lg shadow-md text-left w-full max-w-md">
                <h3 className="text-2xl font-bold text-center">Login</h3>
                <form className="mt-4">
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email
                            Address</label>
                        <input type="email" id="email" onChange={e => setEmail(e.target.value)}
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password"
                               className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="password" onChange={e => setPassword(e.target.value)}
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="button" onClick={submitForm}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">Login
                        </button>
                        <a href="#"
                           className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-700">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}
