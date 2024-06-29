import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "reactstrap";
import homeImg from '../../../assets/img/home.jpg'
import bonDT from "../../../assets/img/Default.jpg"
import Novelties from "./Novelties";
import request from "../../../utils/request";

export const Home = () => {
    const [response, setResponse] = useState([])

    async function fetchData() {
        try {
            await request('GET', 'products/all/extra').then(r => {
                setResponse(r.data)
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className={'vw-100 overflow-hidden'}>
            <Col>
                <Row className={'px-16 '}>
                    <Col lg={6} xs={12} className={'d-flex items-center order-lg-1 order-2'}>
                        <Row>
                            <Col className={'d-flex flex-col gap-y-8'}>
                                <h1 className={'text-6xl font-bold'}>
                                    Masterpieces crafted from <span
                                    className={'text-theme-secondary-one'}>solid wood</span>
                                </h1>
                                <p className={'text-xl'}>Since 1990, Essence has been producing ecological furniture. We
                                    stand for a modern, minimalist
                                    design vocabulary and a sustainable approach to design.</p>

                                <Button
                                    color={''} className={'btn-theme-main w-[400px!important]'}
                                    onClick={() => window.location.href = 'mailto:tharindumad221@gmail.com?subject=Custom%20Design%20Order&body=I%20would%20like%20to%20order%20a%20custom%20design.'}
                                >
                                    Order custom design
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} xs={12} className={'d-flex items-center order-lg-2 order-1'}>
                        <img src={homeImg} className={'w-100'} alt={''}/>
                    </Col>
                </Row>

                <h1 className={'mt-14 ms-16 text-[55px] fw-bolder'}>New Arrivals</h1>
                <Row className={'px-16'}>
                    {response && response.map((product:any) => (
                        <Col lg={3} md={6} className={'p-2'}>
                            <div className={'h-4/5 w-full'}>
                                <img src={product.image1} alt="" className={'object-cover h-full w-full'}/>
                            </div>
                            <h4 className={'text-[31px] font-bold'}>
                                {product.name}
                            </h4>
                        </Col>
                    ))}
                </Row>
                <Novelties />
            </Col>
        </div>
    );
};