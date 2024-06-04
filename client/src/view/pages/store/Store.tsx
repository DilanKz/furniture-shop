import React, {useState} from "react";
import {Button, Col, Row} from "reactstrap";
import Filter from "../../../assets/icons/filter";
import Close from "../../../assets/icons/close";
import {Item} from "./Item";

const Store = () => {
    const [show, setShow] = useState(false)
    const [menuName, setMenuName] = useState('Chairs & Benches')

    return (
        <div className={'vw-100 vh-100 overflow-hidden'}>
            <Row className={'h-100 relative'}>
                <Col
                    lg={2}
                    md={7}
                    xs={10}
                    className={`pt-28 bg-white h-full lg:static absolute top-0 bottom-0 ${show ? '-left-[0rem] z-50' : '-left-[200rem]'} transition-left duration-300 ease-in-out`}
                >
                    <Row className={'justify-end'}>
                        <Button
                            color={''}
                            onClick={() => setShow(!show)}
                            className={'w-[max-content!important] d-lg-none d-flex items-center gap-x-2'}
                        >
                            <Close size={25} />
                        </Button>
                    </Row>

                    <Row className={'gap-y-8 ps-4 text-xs'}>
                        <span onClick={() => setMenuName('Chairs & Benches')} className={`${menuName === 'Chairs & Benches' ? 'text-theme-primary' : 'text-theme-neutral-four'} cursor-pointer`}>Chairs & Benches</span>
                        <span onClick={() => setMenuName('Tables')} className={`${menuName === 'Tables' ? 'text-theme-primary' : 'text-theme-neutral-four'} cursor-pointer`}>Tables</span>
                        <span onClick={() => setMenuName('Sofas')} className={`${menuName === 'Sofas' ? 'text-theme-primary' : 'text-theme-neutral-four'} cursor-pointer`}>Sofas</span>
                        <span onClick={() => setMenuName('Beds')} className={`${menuName === 'Beds' ? 'text-theme-primary' : 'text-theme-neutral-four'} cursor-pointer`}>Beds</span>
                        <span onClick={() => setMenuName('Shelves')} className={`${menuName === 'Shelves' ? 'text-theme-primary' : 'text-theme-neutral-four'} cursor-pointer`}>Shelves</span>
                    </Row>
                </Col>
                <Col xs={12} className={`bg-black opacity-25 h-full absolute ${show? 'd-block z-10':'d-none'}`}></Col>

                <Col lg={10} xs={12} className={'h-full pt-24 overflow-y-scroll'}>
                    <div className={'px-10'}>
                        <Row>
                            <Button
                                color={''}
                                onClick={() => setShow(!show)}
                                className={'w-[max-content!important] d-lg-none d-flex items-center gap-x-2'}
                            >
                                <Filter/>
                                <span className={'fw-bolder text-2xl'}>
                                    Filter
                                </span>
                            </Button>
                        </Row>
                        <Row className={'gap-y-4 mt-2'}>
                            <h1 className={' font-bold'}>{menuName}</h1>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Store