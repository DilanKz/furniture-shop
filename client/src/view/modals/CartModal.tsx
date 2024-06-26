import React, {useContext, useEffect, useState} from "react";
import {Button, Offcanvas, OffcanvasBody, OffcanvasHeader} from 'reactstrap'
import {CartItem} from "../../components/Cards/CartItem";
import {useNavigate} from "react-router-dom";
import UserContext from "../../context/UserProvider";
import {CheckoutModal} from "./CheckoutModal";
export const CartModel = (props: any) => {

    const navigate = useNavigate();

    const context = useContext(UserContext);
    if (!context) {
        throw new Error('This component must be used within a UserProvider');
    }
    const {user} = context;

    const [openCheckOut, setOpenCheckOut] = useState(false);

    return (
        <div className=''>
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
                        {user && user.data.cart.map((item:any) => (
                            <CartItem total={props.total} setTotal={props.setTotal} key={item.sku} sku={item.sku} count={item.count}></CartItem>
                        ))}
                    </div>
                    <div className={'w-full'}>
                        <div>
                            <div className={'flex justify-between text-[16px]'}>
                                <span>subtotal</span>
                                <span className={'font-semibold '}>{props.total}</span>
                            </div>
                            <hr className={'text-gray-400 my-2'}/>
                            <div className={'flex justify-between text-[25px]'}>
                                <span>Total</span>
                                <span className={'font-semibold '}>{props.total}</span>
                            </div>
                        </div>
                        <div>
                            <div className={'w-full flex flex-col justify-center'}>
                                <Button block color='theme-main' onClick={() => {
                                    // props.toggleCanvasScroll()
                                    setOpenCheckOut(true)
                                }}
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
            {user ? <CheckoutModal closeCart={props.toggleCanvasScroll} total={props.total} open={openCheckOut} toggle={setOpenCheckOut}/> : ''}
        </div>
    );
}