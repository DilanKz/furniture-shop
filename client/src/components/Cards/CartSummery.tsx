import {Button, Card, Row} from "reactstrap";
import React, {useState} from "react";

export const CartSummery = (props:any) => {
    const [rSelected, setRSelected] = useState(1)

    const buttonClassActive = 'bg-gray-100 border-2';
    const buttonClassNormal = 'border';

    const circleActive = 'bg-green-500';
    const circleNormal = 'border border-black';

    return (
        <Card className={'p-4'}>
            <h4 className={'font-semibold'}>Cart Summery</h4>


            <div className={'flex flex-col gap-y-2'}>
                <div
                    className={`w-full border-black rounded-md mb-1 py-2 ${rSelected === 1 ? buttonClassActive : buttonClassNormal}`}
                    onClick={() => setRSelected(1)}>
                    <Row className={'m-0 items-center ps-2 justify-between cursor-pointer'}>
                        <div className={'flex items-center w-[max-content!important] gap-x-3'}>
                            <div
                                className={`w-[15px!important] h-[15px!important] rounded-full block p-0 ${rSelected === 1 ? circleActive : circleNormal}`}></div>
                            <span className={'block w-[max-content!important]'}>Pick Up</span>
                        </div>
                        <span className={'block w-[max-content!important]'}>RS. 0.00</span>
                    </Row>
                </div>

                {/*<div
                    className={`w-full border-black rounded-md mb-1 py-2 ${rSelected === 2 ? buttonClassActive : buttonClassNormal}`}
                    onClick={() => setRSelected(2)}>
                    <Row className={'m-0 items-center ps-2 justify-between cursor-pointer'}>
                        <div className={'flex items-center w-[max-content!important] gap-x-3'}>
                            <div
                                className={`w-[15px!important] h-[15px!important] rounded-full block p-0 ${rSelected === 2 ? circleActive : circleNormal}`}></div>
                            <span className={'block w-[max-content!important]'}>Free shipping</span>
                        </div>
                        <span className={'block w-[max-content!important]'}>1234</span>
                    </Row>
                </div>*/}

                <div
                    className={`w-full border-black rounded-md mb-1 py-2 ${rSelected === 3 ? buttonClassActive : buttonClassNormal}`}
                    onClick={() => setRSelected(3)}>
                    <Row className={'m-0 items-center ps-2 justify-between cursor-pointer'}>
                        <div className={'flex items-center w-[max-content!important] gap-x-3'}>
                            <div
                                className={`w-[15px!important] h-[15px!important] rounded-full block p-0 ${rSelected === 3 ? circleActive : circleNormal}`}></div>
                            <span className={'block w-[max-content!important]'}>Express shipping</span>
                        </div>
                        <span className={'block w-[max-content!important]'}>RS. 1000.00</span>
                    </Row>
                </div>
            </div>

            <div className={'mt-4'}>
                <div className={'flex justify-between text-[16px]'}>
                    <span>subtotal</span>
                    <span className={'font-semibold '}>RS. {props.total}.00</span>
                </div>
                <hr className={'text-gray-400 my-2'}/>
                <div className={'flex justify-between text-[25px]'}>
                    <span>Total</span>
                    <span className={'font-semibold '}>RS. {props.total}.00</span>
                </div>
            </div>

            {/*<div>
                <div className={'w-full flex flex-col justify-center'}>
                    <Button block color='theme-main' className='mb-1 uppercase'>
                        CheckOut
                    </Button>
                </div>
            </div>*/}

        </Card>
    );
};