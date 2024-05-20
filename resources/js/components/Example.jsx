import React from 'react';
import ReactDOM from 'react-dom/client';

function Example() {
    return (
        <div className="container">
            <div className="flex justify-center items-center m-auto">
                <div>
                    <h1 className="text-red-800 text-7xl font-bold underline">Laravel</h1>
                    <div className="text-black text-xl">Example Component</div>

                    <div className="text-black text-2xl">I'm an example component!</div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <Example/>
        </React.StrictMode>
    )
}
