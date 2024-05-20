import {Fragment} from "react";
import {Button, Col, Row} from "reactstrap";

export const Home = () => {
    return (
        <Fragment>
            <Row className={'vh-100'}>
                <Col md={6} xs={12} className={'d-flex items-center'}>
                    <Row className={'md:ps-16 px-16 gap-y-8'}>
                        <h1 className={'text-6xl font-bold'}>
                            Masterpieces crafted from <span className={'text-theme-secondary-one'}>solid wood</span>
                        </h1>
                        <p className={'text-xl'}>Since 1990, Iconic has been producing ecological furniture. We stand for a modern, minimalist
                            design vocabulary and a sustainable approach to design.</p>

                        <Button color={''} className={'btn-theme-main w-[400px!important]'}>
                            Order custom design
                        </Button>
                    </Row>
                </Col>
                <Col md={6} xs={12} className={''}>

                </Col>
            </Row>
        </Fragment>
    );
};