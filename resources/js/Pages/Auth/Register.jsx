import {useState} from "react";
import AuthUser from "../../Components/AuthUser";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const {http} = AuthUser();
    const Navigate = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = () => {
        http.post('auth/register', {name: name, email: email, password: password})
            .then((res) => {
                Navigate('/login');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 bg-white rounded-lg shadow-md text-left w-full max-w-md">
                <h3 className="text-2xl font-bold text-center">Sign Up</h3>
                <form className="mt-4">
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input type="text" id="name" onChange={e => setName(e.target.value)}
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email
                            Address</label>
                        <input type="email" id="email" autoComplete="email" onChange={e => setEmail(e.target.value)}
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password"
                               className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="password" onChange={e => setPassword(e.target.value)}
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="button" onClick={handleSubmit}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
