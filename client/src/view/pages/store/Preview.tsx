import React, {useState} from "react";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Col, Row} from "reactstrap";
import {CountButton} from "../../../components/buttons/CountButton";
import main from '../../../assets/img/chair_main.png'
import sec from '../../../assets/img/chair_s.png'
import thi from '../../../assets/img/chair_t.png'
import fou from '../../../assets/img/chair_f.png'
import Ratings from "../../../components/ratings/Ratings";
import Avatar from "../../../components/avatar/Avatar";
import {ReviewCard} from "../../../components/Cards/ReviewCard";

export const Preview = () => {
    const [open, setOpen] = useState('1')

    const toggle = (id: any) => {
        // open === id ? : setOpen(id)
        if (open === id) {
            setOpen('0')
        } else {
            setOpen(id)
        }
    }

    return (
        <div className={'pt-16 px-12'}>
            <Row>
                <Col xl={4} lg={5} md={6} xs={12}>
                    <Row>
                        <Col xs={12} className={'h-[600px] overflow-hidden position-relative'}>
                            <div className={'position-absolute pl-4 pt-4'}>
                                <span className={'block bg-white font-bold px-3 py-1 mb-2 text-[16px] rounded-sm'}>
                                    New
                                </span>
                                <span
                                    className={'text-white block bg-theme-secondary-one font-bold px-3 py-1 text-[16px] rounded-sm'}>
                                    -50%
                                </span>
                            </div>
                            <img src={main} className={'w-full h-full object-cover'} alt=""/>
                        </Col>
                        <Col xs={4} className={'pt-4'}>
                            <img src={sec} alt=""/>
                        </Col>
                        <Col xs={4} className={'pt-4'}>
                            <img src={thi} alt=""/>
                        </Col>
                        <Col xs={4} className={'pt-4'}>
                            <img src={fou} alt=""/>
                        </Col>
                    </Row>
                </Col>
                <Col xl={8} lg={7} md={6} xs={12}>
                    <div className={'w-full flex gap-x-4'}>
                        <div className={'w-max'}><Ratings rating={3} readOnly size="md" /></div>
                        <span className={'ml-2'}>11 reviews</span>
                    </div>
                    <div className={'w-full mt-2'}>
                        <h1 className={'text-[39px]'}>ZENSO LOUNGE</h1>
                    </div>
                    <div className={'w-2/3 mt-4'}>
                        <p>

                        </p>
                    </div>
                    <div className={'text-[31px] mt-4'}>
                        $199.00 <span className={'ml-4 text-[20px] line-through text-theme-neutral-five'}>$400.00</span>
                    </div>

                    <hr/>

                    <div className={' mt-4'}>
                        <span className={'text-[20px] font-semibold'}>Measurements</span>
                        <h6>17 1/2x20 5/8 "</h6>
                    </div>
                    <div className={'mt-4 flex gap-x-8'}>
                        <CountButton size={'large'}/>
                        <Button color={''} className={'btn-outline-theme-main px-4 uppercase'}>
                            Wishlist
                        </Button>
                    </div>
                    <div className={'mt-4'}>
                        <Row className={'w-1/3'}>
                            <Col>
                                <span className={'block text-theme-neutral-five'}>SKU</span>
                                <span className={'block text-theme-neutral-five mt-2'}>CATEGORY</span>
                            </Col>
                            <Col>
                                <span className={'block text-theme-primary'}>117</span>
                                <span className={'block text-theme-primary mt-2'}>Living Room</span>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className={'py-12'}>
                <Accordion className={'border-0'} open={open} toggle={toggle}>
                    <AccordionItem className={'border-0'}>
                        <AccordionHeader className={'outline-[0!important]'} targetId='1'>Additional
                            Info</AccordionHeader>
                        <AccordionBody accordionId='1'>
                            <strong>This is the first item's accordion body.</strong> You can modify any of this with
                            custom CSS or
                            overriding our default variables. It's also worth noting that just about any HTML can go
                            within the{' '}
                            <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.
                        </AccordionBody>
                    </AccordionItem>
                    {/*<AccordionItem className={'border-0'}>
                        <AccordionHeader targetId='2'>Questions</AccordionHeader>
                        <AccordionBody accordionId='2'>
                            <strong>This is the second item's accordion body.</strong> You can modify any of this with
                            custom CSS or
                            overriding our default variables. It's also worth noting that just about any HTML can go
                            within the{' '}
                            <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.
                        </AccordionBody>
                    </AccordionItem>*/}
                    <AccordionItem className={'border-0'}>
                        <AccordionHeader targetId='3'>Reviews (11)</AccordionHeader>
                        <AccordionBody accordionId='3'>
                            <div className={'px-16 flex flex-col gap-y-4'}>
                                <h3>Customer Reviews</h3>
                                <div className={'w-full flex gap-x-2'}>
                                    <div className={'w-max'}><Ratings rating={3} readOnly size="sm"/></div>
                                    <span className={'ml-2 text-sm'}>11 reviews</span>
                                </div>
                                <div>
                                    <span className={''}>Be the first one to review <span
                                        className={'font-semibold'}>Name</span></span>
                                    <div className={'mt-2 border border-gray-600 flex py-2 px-4'}>
                                        <input type="text" placeholder={'Write a review'}
                                               className={'outline-0 w-10/12'}/>
                                        <Button color={''} className={'btn-theme-main w-1/6'}>
                                            Write Review
                                        </Button>
                                    </div>
                                </div>

                                <div className={'mt-4'}>
                                    <h3 className={'mb-4'}>11 Reviews</h3>
                                    <ReviewCard />
                                    <ReviewCard />
                                </div>
                            </div>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </Row>
        </div>
    );
};