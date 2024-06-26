import React, {useContext, useEffect, useState} from "react";
import {Col, Row} from "reactstrap";
import bonDT from "../../assets/img/Default.jpg"
import {CountButton} from "../buttons/CountButton";
import request from "../../utils/request";
import UserContext from "../../context/UserProvider";
export const CartItem = (props:any) => {

    const [product, setProduct] = useState<any>({});
    const [value, setValue] = useState(props.count)
    const [itemTotal, setItemTotal] = useState(0);

    const context = useContext(UserContext);
    if (!context) {
        throw new Error('This component must be used within a UserProvider');
    }
    const {user, setUser} = context;

    const loadItemDetails = () => {
        const fav = {sku: props.sku}
        request('POST', 'products/one', fav).then(r => {
            console.log(r)
            setProduct(r.data)
        })
    }

    const updateCart = () => {
        const fav = {
            email: user.data.email,
            sku: props.sku,
            price: props.price,
            count:value
        }

        request('POST', 'users/cart', fav).then(r => {
            console.log(r)
            setUser(r)
        })
    }

    const removeCart = () => {
        const cart = {
            email: user.data.email,
            sku: props.sku
        }
        request('DELETE', 'users/remove-cart', cart).then(r => {
            console.log(r)
            setUser(r)
            props.setTotal(props.total - itemTotal)
        })
    }

    useEffect(() => {
        console.log(props)
        loadItemDetails()
    }, []);

    useEffect(() => {
        if (product.name) {
            // ** set the total
            let newTotal: number;
            const currentTotal = itemTotal
            setItemTotal(value * product.price)

            newTotal = props.total + value * product.price - currentTotal;

            props.setTotal(newTotal)
        }
    }, [value, product]);

    useEffect(() => {
        const updateData = setTimeout(() => {
            if (props.count !== value) {
                updateCart()
                console.log(props.count)
                console.log(value)
            }
        }, 1000)

        return () => clearTimeout(updateData)
    }, [value]);

    return (
        <Col xs={12} className={''}>
            <Row className={'pb-2'}>
                <Col xs={3}>
                    <img src={bonDT} alt="" />
                </Col>
                <Col xs={9} className={'flex flex-col justify-between'}>
                    <Row className={'justify-between'}>
                        <span className={'text-[16px] w-[max-content!important] font-semibold '}>{product.name}</span>
                        <span className={'text-[16px] w-[max-content!important] font-semibold '}>Rs. {product.price}</span>
                    </Row>
                    <Row className={'justify-between items-end'}>
                        <div className={' w-[max-content!important]'}><CountButton limit={product.count} value={value} setValue={setValue} size={'small'}/></div>
                        <div className={' w-[max-content!important] h-max'}>
                            <button className={'btn btn-close'} onClick={removeCart}></button>
                        </div>
                    </Row>
                </Col>
            </Row>
            <hr className={'text-gray-400'}/>
        </Col>
    );
};