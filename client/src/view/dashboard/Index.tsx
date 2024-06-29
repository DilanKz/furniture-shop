import {Products} from "./products/Products";
import {Orders} from "./orders/Orders";
import {Col, Row} from "reactstrap";
import {Sidebar} from "../../components/navbar/verticle/Sidebar";
import {useState} from "react";

export const Dashboard = () => {

    const [index, setIndex] = useState(1);

    return (
        <div className={'min-h-screen w-100 p-2 pb-0 pt-16'}>
            <Row className={'min-h-screen'}>
                <Col xs={2} className={'min-h-screen'}>
                    <Sidebar setIndex={setIndex}/>
                </Col>
                <Col xs={10}>
                    {index === 1 ? <></> : '' }
                    {index === 2 ? <Products /> : '' }
                    {index === 3 ? <Orders/> : '' }
                </Col>
            </Row>
        </div>
    );
};