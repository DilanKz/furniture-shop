import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "reactstrap";
import Filter from "../../../assets/icons/filter";
import {ProductCard} from "../../../components/Cards/ProductCard";
import request from "../../../utils/request";
import {FilterModel} from "../../modals/FilterModel";

const Store = () => {
    const [show, setShow] = useState(false)
    const [menuName, setMenuName] = useState('Store')
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

    const toggleCanvasScroll = () => {
        setShow(!show)
    }

    return (
        <div className={'overflow-hidden min-h-screen'}>
            <Row className={'h-100 relative pt-28 sm:px-16 px-8'}>
                <h1 className={'font-bold mb-8'}>{menuName}</h1>

                <Col xs={12} className={'h-full'}>
                    <div className={''}>
                        {/*<Row>
                            <Button
                                color={''}
                                onClick={() => setShow(true)}
                                className={`w-[max-content!important] d-flex items-center gap-x-2`}
                            >
                                <Filter/>
                                <span className={'fw-bolder text-2xl'}>
                                    Filter
                                </span>
                            </Button>
                        </Row>*/}
                        <Row className={'gap-y-4 mt-2 flex-wrap'}>
                            {response.map((product:any) => (
                                <ProductCard key={product.sku} product={product} />
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>

            <FilterModel canvasOpen={show} toggleCanvasScroll={toggleCanvasScroll}/>
        </div>
    );
};

export default Store