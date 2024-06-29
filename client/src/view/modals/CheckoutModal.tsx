import React, {ChangeEvent, useContext, useState} from "react";
import UserContext from "../../context/UserProvider";
import {Col, Input, Label, Modal, ModalBody, ModalHeader, Row} from "reactstrap";
import {CartSummery} from "../../components/Cards/CartSummery";
import {IoMdCard} from "react-icons/io";
import request from "../../utils/request";
import {generatePDF} from "../../utils/pdf";

export const CheckoutModal = (props: any) => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('LoginPage must be used within a UserProvider');
    }
    const {user, setUser} = context;

    const [step, setStep] = useState(1);
    const [cardNumber, setCardNumber] = useState<string>('');
    const [expiry, setExpiry] = useState<string>('');
    const [cvc, setCVC] = useState<string>('');
    const toggleModal = () => props.toggle(!props.open);

    const removeStep = () => {
        if (step === 1) {
            toggleModal()
        } else {
            setStep(1)
        }
    }

    const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        const formattedValue = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
        setCardNumber(formattedValue);
    };

    const handleCardNumberValidation = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        if (!/^\d*$/.test(value.replace(/\s/g, ''))) {
            e.preventDefault();
        }
    };

    const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        const formattedValue = value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d{2})/, '$1/$2')
            .slice(0, 5);
        setExpiry(formattedValue);
    };

    const handleExpiryValidation = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        if (!/^\d{0,2}(\/\d{0,2})?$/.test(value)) {
            e.preventDefault();
        }
    };

    const handleCVCChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        const formattedValue = value.replace(/\D/g, '').slice(0, 4);
        setCVC(formattedValue);
    };

    const handleCVCValidation = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        if (!/^\d*$/.test(value)) {
            e.preventDefault();
        }
    };

    const putOrder = () => {
        if (cardNumber.trim() === '') {

        } else if (expiry.trim() === '') {

        } else if (cvc.trim() === '') {

        } else {
            const obj = {
                email: user.data.email,
                name: user.data.name,
                address: user.data.address[0].address,
                items: user.data.cart,
                total: props.total,
                shipping: {
                    type: 'free',
                    price: '2500'
                }
            }

            request('POST', 'orders/add', obj).then(r => {
                console.log(r)
                const order = r.data.order;
                toggleModal()
                props.closeCart()
                setUser({data:r.data.user})
                generatePDF(order);
            })
        }
    }


    return (
        <Modal
            isOpen={props.open}
            toggle={toggleModal}
            centered={true}
        >
            <ModalHeader toggle={toggleModal}>
                Checkout
            </ModalHeader>
            <ModalBody>
                <div className={`p-4 ${step === 1 ? '' : 'd-none'}`}>
                    {user ?
                        <>
                            {user.data.address.length > 0 ? <div className={'mb-4'}>
                                <span className={'fw-bold text-gray-500'}>Address</span>
                                <div className={'p-2 bg-gray-50 rounded-md flex justify-between'}>
                                    <p className={'mb-0 text-gray-500'}>{user.data.address[0].address}</p>
                                </div>
                            </div> : ''}
                        </>
                        : ''}
                    <CartSummery total={props.total}/>
                </div>

                <div className={`p-4 ${step === 2 ? '' : 'd-none'}`}>
                    <span className={'fw-bold text-gray-500'}>Payment/Card Details</span>
                    <Row className={'gap-y-4 mt-4'}>
                    <Col xs={12}>
                            <Label>Card Number</Label>
                            <div className={'w-full flex px-2 items-center border border-gray-300 rounded-md'}>
                                <input
                                    type={'text'}
                                    value={cardNumber}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        handleCardNumberChange(e);
                                        handleCardNumberValidation(e);
                                    }}
                                    className="flex-grow py-2 border-0 outline-0 rounded-l-md"
                                />
                                <IoMdCard/>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <Label>Expire date</Label>
                            <Input
                                type={'text'}
                                value={expiry}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    handleExpiryChange(e);
                                    handleExpiryValidation(e);
                                }}
                            />
                        </Col>
                        <Col xs={6}>
                            <Label>cvc</Label>
                            <Input
                                type={'text'}
                                value={cvc}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    handleCVCChange(e);
                                    handleCVCValidation(e);
                                }}
                            />
                        </Col>
                    </Row>
                </div>

                <Row className={'justify-center gap-x-4'}>
                    <button className='btn bg-[#f3f4f6!important] bg-gray-100 mb-1 w-[max-content!important]'
                            onClick={() => removeStep()}>Back
                    </button>
                    {step === 2 ? <button className='btn btn-theme-main mb-1 w-[max-content!important]'
                                          onClick={putOrder}>Finish</button> :
                        <button disabled={!(user && user.data.address.length < 0)} className='btn btn-theme-main mb-1 w-[max-content!important]'
                                onClick={() => setStep(2)}>Next</button>}
                </Row>
            </ModalBody>
        </Modal>
    );
};