import {Fragment} from "react";
import {Badge, Col, List, ListGroupItem, Row} from "reactstrap";
import logo from '../../../assets/img/Essence.png'
import Search from "../../../assets/icons/search";
import Bag from "../../../assets/icons/bag";
import User from "../../../assets/icons/user";
const Navbar = () => {
    return (
        <Fragment>
            <Col xs={12} className={'position-fixed top-0 start-0 bg-theme-neutral-one'}>
                <Row className={'m-0 justify-content-between'}>
                    <Col lg={2} xs={4} className={'my-3'}>
                        <img src={logo} alt="" className={'w-50 mt-2 ms-4'}/>
                    </Col>
                    <Col lg={4} className={'d-lg-block d-none d-flex align-items-center'}>
                        <List className={'d-flex align-items-center mb-0'}>
                            <ListGroupItem className={'text-theme-main'}>
                                Home
                            </ListGroupItem>
                            <ListGroupItem className={'ms-5 text-theme-neutral-four'}>
                                Shop
                            </ListGroupItem>
                            <ListGroupItem className={'ms-5 text-theme-neutral-four'}>
                                Product
                            </ListGroupItem>
                            <ListGroupItem className={'ms-5 text-theme-neutral-four'}>
                                Contact Us
                            </ListGroupItem>
                        </List>
                    </Col>
                    <Col lg={2} xs={4} className={'d-flex align-items-center'}>
                        <Search className={'me-3'}/>
                        <User className={'me-3'}/>
                        <Bag className={''}/>
                        <Badge className={'rounded-circle ms-1'} color={'theme-secondary-one'}>2</Badge>
                    </Col>
                </Row>
            </Col>
        </Fragment>
    );
};

export default Navbar