import DataTable, {ExpanderComponentProps} from 'react-data-table-component';
import {Button, Col, UncontrolledTooltip} from "reactstrap";
import {BsCartCheckFill, BsFillCartDashFill} from "react-icons/bs";
import * as React from "react";
import {useEffect, useState} from "react";
import request from "../../../utils/request";
import {FaPen, FaTrash} from "react-icons/fa6";
import {UpdateProductModal} from "../products/UpdateProductModal";

type DataRow = {
    sku:string
};

const ExpandedComponent: React.FC<ExpanderComponentProps<DataRow>> = ({ data }) => {
    return (
        <div className={'p-2'}>
            <span>{data.sku}</span>
        </div>
    );
};


export const Orders = () => {

    const [response, setResponse] = useState([])
    const loadAllProducts = async () => {
        await request('GET', 'orders/all').then(r => {
            setResponse(r.data)
        });
    }

    useEffect(() => {
        loadAllProducts()
    }, []);

    const approveOrder = async (id:string) => {
        await request('POST', 'orders/approve',{orderId: id}).then(r => {
            setResponse(r.data)
        });
    }

    const deniedOrder = async (id:string) => {
        await request('POST', 'orders/deny',{orderId: id}).then(r => {
            setResponse(r.data)
        });
    }

    const customColumn = () => {
        return [
            {
                name: 'id',
                sortable: true,
                selector: (row: any) => row.orderId,
            },
            {
                name: 'Total',
                selector: (row: any) => row.total,
            },
            {
                name: 'Address',
                sortable: true,
                selector: (row: any) => row.address[0].address,
            },
            {
                name: 'Action',
                selector: (row: any) => {

                    return (
                        <>
                            <Button onClick={()=> approveOrder(row.sku)} id={`btnUpdate${row.sku}`} color={'theme-secondary-one'}
                                    className={'bg-green-400 text-white mr-2'}><BsCartCheckFill size={14}/></Button>
                            <Button onClick={()=> deniedOrder(row.sku)} id={`btnDelete${row.sku}`} color={'theme-secondary-two'}
                                    className={'bg-green-400 text-white'}><BsFillCartDashFill size={14}/></Button>

                            {row.state !== 'approved' ?
                                <UncontrolledTooltip target={`btnUpdate${row.sku}`}>
                                    Approve Order
                                </UncontrolledTooltip>
                                : ''}

                            {row.state === 'denied' ?
                                <UncontrolledTooltip target={`btnDelete${row.sku}`}>
                                    Cancel Order
                                </UncontrolledTooltip>
                                : ''}
                        </>
                    )
                },
            }
        ];
    }

    return (
        <div className={'w-100 h-100 pt-20'}>
            <Col className={'d-flex justify-between mb-2'}>
                <span className={'w-[max-content!important] text-2xl font-semibold'}>Orders</span>
            </Col>

            <DataTable
                pagination
                data={response ? response : [] }
                columns={customColumn()}
                paginationComponentOptions={{noRowsPerPage: true}}
                expandableRows expandableRowsComponent={ExpandedComponent}
            />

        </div>
    );
};