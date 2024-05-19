import {Fragment} from "react";
import {Badge, Col, List, ListGroupItem, Row} from "reactstrap";
import logo from '../../../assets/img/Essence.png'
import Search from "../../../assets/icons/search";
import Bag from "../../../assets/icons/bag";
import User from "../../../assets/icons/user";
const Navbar = () => {
    return (
        <Fragment>
            <Row className={'m-0 justify-content-between'}>
                <Col lg={2} className={'my-3'}>
                    <img src={logo} alt="" className={'w-50 mt-2 ms-4'}/>
                </Col>
                <Col lg={4} className={'d-flex align-items-center'}>
                    <List className={'d-flex align-items-center mb-0'}>
                        <ListGroupItem>
                            Home
                        </ListGroupItem>
                        <ListGroupItem className={'ms-5'}>
                            Shop
                        </ListGroupItem>
                        <ListGroupItem className={'ms-5'}>
                            Product
                        </ListGroupItem>
                        <ListGroupItem className={'ms-5'}>
                            Contact Us
                        </ListGroupItem>
                    </List>
                </Col>
                <Col lg={2} className={'d-flex align-items-center'}>
                    <Search className={'me-3'}/>
                    <User className={'me-3'}/>
                    <Bag className={''}/>
                    <Badge className={'rounded-circle ms-1'} color={'theme-secondary-one'}>2</Badge>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Navbar