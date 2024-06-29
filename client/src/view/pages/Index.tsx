import React from "react";
import {Route, Routes} from 'react-router-dom';
import {Home} from "./home/Home";
import Store from "./store/Store";
import {CheckOut} from "./checkout/CheckOut";
import {Preview} from "./store/Preview";
import Navbar from "../../components/navbar/horizontal/Navbar";
import {Footer} from "../../components/footer/Footer";
import {Dashboard} from "../dashboard/Index";

const MainPage = () => {
    return (
        <div>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/store" element={<Store/>}/>
                <Route path="/checkout" element={<CheckOut/>}/>
                <Route path="/preview" element={<Preview/>}/>
                <Route path="/panel" Component={Dashboard}></Route>
            </Routes>

            <Footer/>
        </div>
    );
};

export default MainPage