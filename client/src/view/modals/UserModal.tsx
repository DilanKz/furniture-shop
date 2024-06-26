import {Col, Input, Modal, ModalBody, ModalHeader, Row} from "reactstrap";
import React, {useContext, useEffect, useState} from "react";
import UserContext from "../../context/UserProvider";
import Avatar from "../../components/avatar/Avatar";
import {MdOutlineModeEdit} from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import request from "../../utils/request";

export const UserModal = (props: any) => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('LoginPage must be used within a UserProvider');
    }
    const {user, setUser} = context;

    const [editAddress, setEditAddress] = useState(false);
    const [address, setAddress] = useState('');

    const updateAddress = () => {
        const fav = {
            email: user.data.email,
            address
        }

        request('POST', 'users/address', fav).then(r => {
            console.log(r)
            if (r.success) {
                setEditAddress(false)
            }
            setUser(r)
        })
    }

    useEffect(() => {
        if (user) {
            if (user.data.address.length === 0) {
                setEditAddress(true)
            } else {
                setAddress(user.data.address[0].address)
            }
        }
    }, []);

    const toggleModal = () => props.toggle(false);
    return (
        <Modal
            isOpen={props.open}
            toggle={toggleModal}
            centered={true}
        >
            <ModalHeader toggle={toggleModal}>
                Settings
            </ModalHeader>

            <ModalBody>
                {user ? <div className={'p-4'}>
                    <span className={'fw-bolder text-gray-400'}>About</span>
                    <Row className={'align-items-center mt-2'}>
                        <Col xs={1} className={'mr-8'}>
                            <Avatar src={user.data?.image} name={'Tharindu Dilan'} size={'md'} color={'#a9bbef'}/>
                        </Col>

                        <Col xs={8} className={'flex flex-col'}>
                            <span className={'font-semibold text-sm'}>{user.data?.name}</span>
                            <p className={'mb-0 text-sm'}>{user.data?.email}</p>
                        </Col>

                        <Col xs={1}>
                            <button className={'btn'} onClick={()=> {
                                setUser(null);
                                toggleModal()
                            }}><IoLogOutOutline /></button>
                        </Col>
                    </Row>

                    <div className={'mt-4'}>
                        <span className={'fw-bolder text-gray-400'}>Address</span>
                        {!editAddress ? <div className={'p-2 bg-gray-100 rounded-md flex justify-between'}>
                                <p className={'mb-0 text-gray-500'}>{address}</p>
                                <button className={'btn'} onClick={() => setEditAddress(true)}><MdOutlineModeEdit/></button>
                            </div> :
                            <div className={'p-2 bg-gray-100 rounded-md flex justify-between'}>
                                <Input type={'textarea'} className={'bg-gray-100 h-100'}
                                       value={address} onChange={e=> setAddress(e.target.value)}/>
                                <div className={'flex flex-col'}>
                                    <button className={'btn'} onClick={updateAddress}><IoCheckmark/></button>
                                    <button className={'btn'} onClick={() => setEditAddress(false)}><IoCloseSharp/>
                                    </button>
                                </div>
                            </div>}
                    </div>
                </div> : ''}
            </ModalBody>
        </Modal>
    );
};