import React from 'react';
import './App.css';
import MainPage from "./view/pages/Index";
import Login from "./view/pages/Login/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserProvider} from "./context/UserProvider";

function App() {
    return (
        <div className="App w-100 overflow-x-hidden">
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" Component={MainPage}></Route>
                        <Route path="/login" Component={Login}></Route>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </div>
    );
}

export default App;
