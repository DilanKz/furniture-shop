import DataTable, {ExpanderComponentProps} from 'react-data-table-component';
import {Button, Col, UncontrolledTooltip} from "reactstrap";
import {BsCartCheckFill, BsFillCartDashFill} from "react-icons/bs";
import * as React from "react";
import {useEffect, useState} from "react";
import request from "../../../utils/request";
import {IoMdClose, IoMdDoneAll} from "react-icons/io";

type DataRow = {
    email: string,
    items: []
};

const ExpandedComponent: React.FC<ExpanderComponentProps<DataRow>> = ({data}) => {
    return (
        <div className="p-4 my-4 ${true ? 'border-b' : ''}">
            <h4 className="text-lg font-semibold mb-4">Order Details</h4>

            <span className="block text-gray-600 mb-2">Email: <span
                className="text-gray-800 font-medium">{data.email}</span></span>

            <ul className="mb-4 mt-2 list-disc pl-5">
                {data.items.map((item: any, index: number) => (
                    <li key={index}
                        className="flex flex-wrap items-center gap-x-6 py-2">
                        <span className="text-gray-600">SKU: <span
                            className="text-gray-800 font-medium">{item.sku}</span></span>
                        <span className="text-gray-600">Qty: <span
                            className="text-gray-800 font-medium">{item.count}</span></span>
                        <span className="text-gray-600">Price: <span
                            className="text-gray-800 font-medium">${item.price}</span></span>
                    </li>
                ))}
            </ul>
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

    const approveOrder = async (id: string) => {
        await request('POST', 'orders/approve', {orderId: id}).then(r => {
            loadAllProducts()
        });
    }

    const deniedOrder = async (id: string) => {
        await request('POST', 'orders/deny', {orderId: id}).then(r => {
            loadAllProducts()
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

                            {row.state === 'requested' || row.state === 'denied' ?
                                <>
                                    <Button onClick={() => approveOrder(row.orderId)} id={`btnUpdate${row.orderId}`}
                                            color={'theme-secondary-one'}
                                            className={'bg-green-400 text-white mr-2'}><BsCartCheckFill
                                        size={14}/></Button>
                                    <UncontrolledTooltip target={`btnUpdate${row.orderId}`}>
                                        Approve Order
                                    </UncontrolledTooltip>
                                </>
                                : ''}

                            {row.state === 'approved' ?
                                <>
                                    <Button id={`btnUpdate${row.orderId}`}
                                            color={'theme-secondary-one'}
                                            className={'bg-green-400 text-white mr-2'}>
                                        <IoMdDoneAll size={14}/></Button>
                                    <UncontrolledTooltip target={`btnUpdate${row.orderId}`}>
                                        Order Approved
                                    </UncontrolledTooltip>
                                </>
                                : ''}

                            {row.state === 'requested' || row.state === 'approved' ?
                                <>
                                    <Button onClick={() => deniedOrder(row.orderId)} id={`btnDelete${row.orderId}`}
                                            color={'theme-secondary-two'}
                                            className={'bg-green-400 text-white'}><BsFillCartDashFill size={14}/></Button>

                                    <UncontrolledTooltip target={`btnDelete${row.orderId}`}>
                                        Cancel Order
                                    </UncontrolledTooltip>
                                </>
                                : ''}

                            {row.state === 'denied' ?
                                <>
                                    <Button id={`btnDelete${row.orderId}`} color={'theme-secondary-two'}
                                            className={'bg-green-400 text-white'}><IoMdClose size={14}/></Button>

                                    <UncontrolledTooltip target={`btnDelete${row.orderId}`}>
                                        Order denied
                                    </UncontrolledTooltip>
                                </>
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
                data={response ? response : []}
                columns={customColumn()}
                paginationComponentOptions={{noRowsPerPage: true}}
                expandableRows expandableRowsComponent={ExpandedComponent}
            />

        </div>
    );
};