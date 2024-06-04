import React from "react";
import {Col, Row} from "reactstrap";

export const Preview = () => {
    return (
        <div className={'pt-16'}>
            <Row>
                <Col lg={5} md={6} xs={12}>
                    <Row>
                        <Col xs={12}>
                            <img src="" alt=""/>
                        </Col>
                        <Col xs={4}>
                            <img src="" alt=""/>
                        </Col>
                        <Col xs={4}>
                            <img src="" alt=""/>
                        </Col>
                        <Col xs={4}>
                            <img src="" alt=""/>
                        </Col>
                    </Row>
                </Col>
                <Col lg={7} md={6} xs={12}>
                    <div className={'w-full'}>
                        <span>4star review</span>
                        <span className={'ml-2'}>11 reviews</span>
                    </div>
                    <div className={'w-full'}>
                        <h1 className={'text-[39px]'}>ZENSO LOUNGE</h1>
                    </div>
                    <div className={'w-2/3'}>
                        <p>
                            ZENSO LOUNGE stands apart through its level of comfort which it provides despite its compact
                            size. It is inviting and expressive. The sturdy solid wood frame appears light thanks to its
                            cross construction. The tapered contour of the upholstery shapes its character. ZENSO LOUNGE
                            always has an upholstered seat and back. The seat upholstery is always fully upholstered;
                            the back shell has an attached cushion. You can sit back, relax and feel embraced.
                        </p>
                    </div>
                    <div className={'text-[31px]'}>
                        $199.00 <span className={'ml-4 text-[20px] line-through text-theme-neutral-five'}>$400.00</span>
                    </div>

                    <hr/>

                    <div>
                        <span className={'text-[20px] font-semibold'}>Measurements</span>
                        <h6>17 1/2x20 5/8 "</h6>
                    </div>
                </Col>
            </Row>
        </div>
    );
};