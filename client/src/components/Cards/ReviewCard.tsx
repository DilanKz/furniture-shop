import {Col, Row} from "reactstrap";
import React from "react";
import Avatar from "../avatar/Avatar";
import Ratings from "../ratings/Ratings";


export const ReviewCard = (props:any) => {
    return (
        <Row className={'mb-2'}>
            <Col xs={1}>
                <Avatar name={'Tharindu Dilan'} size={'md'} color={'#a9bbef'}/>
            </Col>
            <Col xs={9}>
                <span className={'font-semibold mb-2'}>Name</span>
                <div className={'w-max mb-2'}><Ratings rating={3} readOnly size="sm"/></div>
                <p className={''}>Description</p>
            </Col>
            <Col xs={2}>
                <span className={'text-xs'}>about 1 hour ago</span>
            </Col>
            <hr className={'text-gray-400'}/>
        </Row>
    );
};