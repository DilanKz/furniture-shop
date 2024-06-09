import {Col, Row} from "reactstrap";
import bonDT from "../../../assets/img/Default.jpg"
import { useNavigate } from 'react-router-dom';
export const Item = (props:{}) => {
    const navigate = useNavigate();
    return (
        <Col xl={3} lg={4} md={6} xs={12} onClick={() => navigate('/home')}>
            <Row>
                <img src={bonDT} alt="" className={'w-full h-2/3 object-cover'}/>
            </Row>

            <Row>

                <span className={'text-[31px] font-bold'}>1.3 Chair</span>
                <span className={'text-[16px] font-bold'}>$70</span>
            </Row>
        </Col>
    );
};