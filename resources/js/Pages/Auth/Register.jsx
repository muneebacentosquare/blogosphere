export default function Register() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 bg-white rounded-lg shadow-md text-left w-full max-w-md">
                <h3 className="text-2xl font-bold text-center">Sign Up</h3>
                <form action="/signup" method="post" className="mt-4">
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input type="text" id="name" name="name"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email
                            Address</label>
                        <input type="email" id="email" name="email"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password"
                               className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="password" name="password"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-bold mb-2">Confirm
                            Password</label>
                        <input type="password" id="confirm-password" name="confirm-password"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">Sign
                            Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
