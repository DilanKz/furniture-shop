import {Button, Col} from "reactstrap";
import img from '../../assets/img/Default.jpg';
import React, {useEffect} from "react";
import Ratings from "../ratings/Ratings";
import Heart from "../../assets/icons/heart";

export const ProductCard = (props: any) => {
    useEffect(() => {
        console.log(props)
    }, []);
    return (
        <Col lg={3} md={4} sm={6}>
            <div className={'flex flex-col bg-white p-2 relative overflow-y-hidden'}>
                <img src={img} alt="" className={'w-full h-[50%!important] object-cover'}/>
                <Button block color='theme-main' className='mb-1 mt-1'>
                    Add to cart
                </Button>
                <Ratings size={"sm"} initialRating={props.product.ratings} readOnly/>
                <span className={'text-[16px] font-semibold'}>{props.product.name}</span>
                <span className={'text-[14px] font-semibold'}>{props.product.price}</span>

                <button
                    className={'w-[32px!important] h-[32px!important] bg-white rounded-full absolute top-0 right-0 mt-3 mr-3 flex justify-center items-center outline-0 shadow'}>
                    <Heart fillColor={'black'}/>
                </button>
            </div>
        </Col>
    );
};