import './bootstrap';
import '../css/app.css';
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/User/Home";
import About from "./Pages/User/About";
import Example from "./Pages/User/Example";

ReactDOM.render(
    <BrowserRouter>
        <Navbar></Navbar>
        <div className="container">
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/example" element={<Example/>}></Route>
            </Routes>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);
