import React from "react";

import {Badge, Col, List, ListGroupItem, Row} from "reactstrap";

import logo from '../../../assets/img/Essence.png'
import Search from "../../../assets/icons/search";
import Bag from "../../../assets/icons/bag";
import User from "../../../assets/icons/user";

const Navbar = () => {
    return (
        <div className={'vw-100 overflow-hidden'}>
            <Col xs={12} className={'position-fixed top-0 start-0 bg-theme-neutral-one vw-100'}>
                <Row className={'m-0 justify-content-between'}>
                    <Col lg={2} xs={4} className={'my-3'}>
                        <img src={logo} alt="" className={'w-50 mt-2 ms-4'}/>
                    </Col>
                    <Col lg={5} className={'d-lg-flex d-none items-center'}>
                        <List className={'d-flex align-items-center mb-0'}>
                            <ListGroupItem className={'text-theme-main cursor-pointer text-[16px]'}>
                                Home
                            </ListGroupItem>
                            <ListGroupItem className={'ms-5 text-theme-neutral-four cursor-pointer text-[16px]'}>
                                Shop
                            </ListGroupItem>
                            <ListGroupItem className={'ms-5 text-theme-neutral-four cursor-pointer text-[16px]'}>
                                Product
                            </ListGroupItem>
                            <ListGroupItem className={'ms-5 text-theme-neutral-four cursor-pointer text-[16px]'}>
                                Contact Us
                            </ListGroupItem>
                        </List>
                    </Col>
                    <Col lg={2} xs={4} className={'d-flex align-items-center justify-end'}>
                        <div className={'cursor-pointer'}>
                            <Search className={'me-3'}/>
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
        </div>
    );
};

export default Navbar