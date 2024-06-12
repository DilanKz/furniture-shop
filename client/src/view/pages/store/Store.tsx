import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "reactstrap";
import Filter from "../../../assets/icons/filter";
import {ProductCard} from "../../../components/Cards/ProductCard";
import request from "../../../utils/request";

const Store = () => {
    const [show, setShow] = useState(false)
    const [menuName, setMenuName] = useState('Chairs & Benches')
    const [response, setResponse] = useState([])

    async function fetchData() {
        try {
            await request('GET', 'products/all').then(r => {
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
        <div className={'overflow-hidden'}>
            <Row className={'h-100 relative pt-28 sm:px-16 px-8'}>
                <h1 className={'font-bold'}>{menuName}</h1>

                <Col xs={12} className={'h-full'}>
                    <div className={''}>
                        <Row>
                            <Button
                                color={''}
                                onClick={() => setShow(!show)}
                                className={'w-[max-content!important] d-flex items-center gap-x-2'}
                            >
                                <Filter/>
                                <span className={'fw-bolder text-2xl'}>
                                    Filter
                                </span>
                            </Button>
                        </Row>
                        <Row className={'gap-y-4 mt-2 flex-wrap'}>
                            {response.map((product:any) => (
                                <ProductCard key={product.sku} product={product} />
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Store