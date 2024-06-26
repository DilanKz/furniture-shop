import React, {useContext, useEffect, useState} from "react";

import {Badge, Button, Col, List, Row} from "reactstrap";

import logo from '../../../assets/img/Essence.png'
import Search from "../../../assets/icons/search";
import Bag from "../../../assets/icons/bag";
import User from "../../../assets/icons/user";
import {CartModel} from "../../../view/modals/CartModal";
import {Link} from "react-router-dom";
import Login from "../../../view/pages/Login/Login";
import UserContext from "../../../context/UserProvider";
import {UserModal} from "../../../view/modals/UserModal";

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [canvasOpen, setCanvasOpen] = useState(false)
    const [openLoginModel, setOpenLoginModel] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [openUser, setOpenUser] = useState(false);

    const [total, setTotal] = useState(0);

    const context = useContext(UserContext);
    if (!context) {
        throw new Error('this component must be used within a UserProvider');
    }
    const { user } = context;

    useEffect(() => {
        // localStorage.removeItem('user');
        const user = localStorage.getItem('user');
        console.log(user)
        if (user) {
            setIsUserLoggedIn(true);
        } else {
            setIsUserLoggedIn(false);
        }
    }, []);

    const toggleCanvasScroll = () => {
        setCanvasOpen(!canvasOpen)
    }

    return (
        <Col xs={12}
             className={`position-fixed top-0 start-0 bg-theme-neutral-one vw-100 z-[1000] bg-red-400 ${!open ? 'h-16' : 'h-max'}`}>
            <Row className={'m-0 justify-content-between'}>
                <Col lg={2} md={3} xs={6} className={'my-3 flex items-center'}>
                    <div className={'cursor-pointer d-lg-none d-block w-max'} onClick={() => setOpen(!open)}>
                        <User className={'me-3'} color={'#d92424'}/>
                    </div>
                    <img src={logo} alt="" className={'w-50 mt- ms-1'}/>
                </Col>
                <div
                    className={`w-[max-content!important] d-lg-flex items-center order-lg-2 order-3 ${open ? '' : 'd-none'}`}>
                    <List
                        className={'d-flex lg:flex-row flex-col align-items-lg-center mb-0 lg:gap-y-0 gap-y-8 lg:pb-0 pb-10'}>
                        <Link to="/" className={'text-decoration-none text-theme-main cursor-pointer text-[16px]'}
                              onClick={() => {
                              }}>
                            Home
                        </Link>
                        <Link to="/store"
                              className={'text-decoration-none ms-lg-5 text-theme-neutral-four cursor-pointer text-[16px]'}>
                            Shop
                        </Link>
                        <Link to="/none"
                              className={'text-decoration-none ms-lg-5 text-theme-neutral-four cursor-pointer text-[16px]'}>
                            Contact Us
                        </Link>
                        <Link to="/home"
                              className={'text-decoration-none ms-lg-5 text-theme-neutral-four cursor-pointer text-[16px]'}>
                            <div className={'cursor-pointer d-block d-lg-none'}>
                                <Search className={'me-3'}/>
                            </div>
                        </Link>
                    </List>
                </div>

                <Col lg={3} xs={4} className={'d-flex align-items-center justify-end order-lg-3 order-2'}>
                    {!user && (
                        <Button size={'sm'} color={'theme-main'} className={'mr-4'}
                                onClick={() => setOpenLoginModel(!openLoginModel)}>
                            SING UP
                        </Button>
                    )}
                    {user && (
                        <>
                            <div className={'cursor-pointer'} onClick={()=> setOpenUser(true)}>
                                <User className={'me-3'}/>
                            </div>

                            <div className={'cursor-pointer d-flex'} onClick={() => {
                                toggleCanvasScroll()
                                setTotal(0)
                            }}>
                                <Bag className={''}/>
                                <Badge className={'rounded-circle ms-0.5 me-2'} color={'theme-secondary-one'}>
                                    {user.data.cart.length}
                                </Badge>
                            </div>
                        </>
                    )}
                </Col>
            </Row>
            <CartModel total={total} setTotal={setTotal} canvasOpen={canvasOpen} toggleCanvasScroll={toggleCanvasScroll}/>
            <Login open={openLoginModel} toggle={setOpenLoginModel}/>
            <UserModal open={openUser} toggle={setOpenUser} />
        </Col>
    );
};

export default Navbar