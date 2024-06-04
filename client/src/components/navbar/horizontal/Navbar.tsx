import React, {useState} from "react";

import {Badge, Col, List, ListGroupItem, Row} from "reactstrap";

import logo from '../../../assets/img/Essence.png'
import Search from "../../../assets/icons/search";
import Bag from "../../../assets/icons/bag";
import User from "../../../assets/icons/user";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <Col xs={12} className={`position-fixed top-0 start-0 bg-theme-neutral-one vw-100 z-[1000] bg-red-400 ${!open ? 'h-16':'h-max'} transition-all overflow-hidden duration-300 ease-in`}>
            <Row className={'m-0 justify-content-between'}>
                <Col lg={2} xs={4} className={'my-3'}>
                    <img src={logo} alt="" className={'w-50 mt-2 ms-4'}/>
                </Col>
                <Col lg={5} className={'d-lg-flex items-center order-lg-2 order-3'}>
                    <List className={'d-flex lg:flex-row flex-col align-items-lg-center mb-0 lg:gap-y-0 gap-y-8 lg:pb-0 pb-10'}>
                        <ListGroupItem className={'text-theme-main cursor-pointer text-[16px]'}>
                            Home
                        </ListGroupItem>
                        <ListGroupItem className={'ms-lg-5 text-theme-neutral-four cursor-pointer text-[16px]'}>
                            Shop
                        </ListGroupItem>
                        <ListGroupItem className={'ms-lg-5 text-theme-neutral-four cursor-pointer text-[16px]'}>
                            Product
                        </ListGroupItem>
                        <ListGroupItem className={'ms-lg-5 text-theme-neutral-four cursor-pointer text-[16px]'}>
                            Contact Us
                        </ListGroupItem>
                        <ListGroupItem className={'ms-lg-5 text-theme-neutral-four cursor-pointer text-[16px]'}>
                            <div className={'cursor-pointer d-block d-lg-none'}>
                                <Search className={'me-3'}/>
                            </div>
                        </ListGroupItem>
                    </List>
                </Col>
                <Col lg={2} xs={4} className={'d-flex align-items-center justify-end order-lg-3 order-2'}>
                    <div className={'cursor-pointer d-lg-block d-none'}>
                        <Search className={'me-3'}/>
                    </div>
                    <div className={'cursor-pointer'} onClick={() => setOpen(!open)}>
                        <User className={'me-3'} color={'#d92424'} />
                    </div>
                    <div className={'cursor-pointer'}>
                        <User className={'me-3'}/>
                    </div>
                    <div className={'cursor-pointer d-flex'}>
                        <Bag className={''}/>
                        <Badge className={'rounded-circle ms-1'} color={'theme-secondary-one'}>2</Badge>
                    </div>
                </Col>
            </Row>
        </Col>
    );
};

export default Navbar