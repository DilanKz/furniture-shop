import React, {useContext, useState} from "react";
import {Col, Row} from "reactstrap";
import {CartItem} from "../../../components/Cards/CartItem";
import {CartSummery} from "../../../components/Cards/CartSummery";
import UserContext from "../../../context/UserProvider";

export const CheckOut = () => {

    const context = useContext(UserContext);
    if (!context) {
        throw new Error('This component must be used within a UserProvider');
    }
    const {user} = context;

    const [total, setTotal] = useState(0);

    return (
        <div className={'pt-16 px-12 mb-4'}>
            <h1 className={'uppercase font-bold'}>Shopping Cart</h1>
            <Row className={'lg:gap-x-2 pt-8 px-8 h-[max-content!important]'}>
                <Col xxl={4} xl={4} lg={5} md={6} className={'mt-4 h-[max-content!important]'}>
                    <div className={'flex flex-col gap-y-3 max-h-[75%] overflow-y-scroll overflow-x-hidden small-scrollbar pe-2'}>
                        {user && user.data.cart.map((item:any) => (
                            <CartItem total={total} setTotal={setTotal} key={item.sku} sku={item.sku} count={item.count}></CartItem>
                        ))}
                    </div>
                </Col>
                <Col xxl={4} xl={4} lg={5} md={6} className={'mt-4'}>
                    <CartSummery total={total} />
                </Col>
            </Row>
        </div>
    );
};