import React from 'react';
import './App.css';
import Navbar from "../src/components/navbar/horizontal/Navbar";
import {CheckOut} from "./view/pages/checkout/CheckOut";
import {Footer} from "./components/footer/Footer";
import MainPage from "./view/pages/Index";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App w-100 overflow-x-hidden">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" Component={MainPage}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
