import React from "react";
import {Col, Row} from "reactstrap";
import bonDT from "../../assets/img/Default.jpg"
import {CountButton} from "../buttons/CountButton";
export const CartItem = () => {
    return (
        <Col xs={12} className={''}>
            <Row className={'pb-2'}>
                <Col xs={3}>
                    <img src={bonDT} alt="" />
                </Col>
                <Col xs={9} className={'flex flex-col justify-between'}>
                    <Row className={'justify-between'}>
                        <span className={'text-[16px] w-[max-content!important] font-semibold '}>Table</span>
                        <span className={'text-[16px] w-[max-content!important] font-semibold '}>Rs. 1700</span>
                    </Row>
                    <Row className={'justify-between items-end'}>
                        <div className={' w-[max-content!important]'}><CountButton size={'small'}/></div>
                        <div className={' w-[max-content!important] h-max'}>
                            <button className={'btn btn-close'}></button>
                        </div>
                    </Row>
                </Col>
            </Row>
            <hr className={'text-gray-400'}/>
        </Col>
    );
};