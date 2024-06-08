import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap'
import React, {useState} from "react";
import {CartItem} from "../../components/Cards/CartItem";
export function CartModel(props:any) {
    return (
        <div className='demo-inline-spacing'>
            <Offcanvas
                direction='end'
                isOpen={props.canvasOpen}
                toggle={props.toggleCanvasScroll}
            >
                <OffcanvasHeader toggle={props.toggleCanvasScroll}>
                    Cart
                </OffcanvasHeader>
                <OffcanvasBody className='mx-0 flex flex-col justify-content-between relative'>
                    <div className={'flex flex-col gap-y-3 max-h-[75%] overflow-y-scroll overflow-x-hidden'}>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                    </div>
                    <div className={'w-full'}>
                        <div>
                            <div className={'flex justify-between text-[16px]'}>
                                <span>subtotal</span>
                                <span className={'font-semibold '}>123</span>
                            </div>
                            <hr className={'text-gray-400 my-2'}/>
                            <div className={'flex justify-between text-[25px]'}>
                                <span>Total</span>
                                <span className={'font-semibold '}>123</span>
                            </div>
                        </div>
                        <div>
                            <div className={'w-full flex flex-col justify-center'}>
                                <Button block color='theme-main' onClick={props.toggleCanvasScroll}
                                        className='mb-1 uppercase'>
                                    CheckOut
                                </Button>
                                <div className={' flex justify-center'}>
                                    <a onClick={props.toggleCanvasScroll}
                                       className={'w-max text-center underline text-dark font-semibold'}>
                                        Cancel
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    );
}