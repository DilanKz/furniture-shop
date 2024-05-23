import React from "react";
import {CardTitle, Col, Row} from "reactstrap";
import bonDT from '../../../assets/img/Default.jpg'
import bed from '../../../assets/img/Default1.jpg'

const Novelties = () => {
    return (
        <div className={'w-screen overflow-x-hidden'}>

            <CardTitle className={'mt-16'}>
                <h1 className={'ms-14 mb-8 text-[55px] fw-bolder'}>Novelties</h1>
            </CardTitle>

            <Row className={'m-0 px-10'}>
                <Col lg={6}>
                    <Row className={'mb-3 gap-y-8'}>
                        <Col xs={12} className={'md:h-80 overflow-hidden'}>
                            <Row>
                                <Col md={6} className={'order-md-1 order-2'} >
                                    <img src={bonDT} alt="" className={'object-cover h-full w-full'}/>
                                </Col>
                                <Col md={6} className={'order-md-2 order-1'} >
                                    <div>
                                        <h4 className={'text-[55px] font-bold'}>
                                            AD MIRE
                                        </h4>
                                        <p className={'text-[16px]'}>
                                            AD MIRE – the adjustable table mirror. This compact vanity mirror turns any
                                            table or console into a dressing table. The base is made from solid timber
                                            and holds the mirror in place.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className={'md:h-80 overflow-hidden'}>
                            <Row>
                                <Col md={6}>
                                    <div>
                                        <h4 className={'text-[55px] font-bold'}>
                                            Chairs & Benches
                                        </h4>
                                        <p className={'text-[16px]'}>
                                            The ensemble of the 1.3 Collection comprises chair, stool and bar stool. The most outstanding feature of this delicate.
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <img src={bonDT} alt="" className={'object-cover h-full w-full'}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6}>
                    <img src={bonDT} alt=""/>
                </Col>
                <Col xs={12}>
                    <Row>
                        <Col lg={6} className={'mt-md-0 mt-3'}>
                            <img src={bed} alt=""/>
                        </Col>
                        <Col lg={6} className={'md:h-80 overflow-hidden'}>
                            <Row>
                                <Col md={6} className={'order-md-1 order-2'} >
                                    <img src={bonDT} alt="" className={'object-cover h-full w-full'}/>
                                </Col>
                                <Col md={6} className={'order-md-2 order-1'} >
                                    <div>
                                        <h4 className={'text-[55px] font-bold'}>
                                            AD MIRE
                                        </h4>
                                        <p className={'text-[16px]'}>
                                            AD MIRE – the adjustable table mirror. This compact vanity mirror turns any
                                            table or console into a dressing table. The base is made from solid timber
                                            and holds the mirror in place.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Novelties
