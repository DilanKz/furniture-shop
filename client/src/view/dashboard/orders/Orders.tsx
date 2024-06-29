import DataTable, {ExpanderComponentProps} from 'react-data-table-component';
import {Button, Col, UncontrolledTooltip} from "reactstrap";
import {BsCartCheckFill, BsFillCartDashFill} from "react-icons/bs";
import * as React from "react";
import {useEffect} from "react";

type DataRow = {
    sku: string
};

const ExpandedComponent: React.FC<ExpanderComponentProps<DataRow>> = ({data}) => {
    return (
        <div className={'p-2'}>
            <span>{data.sku}</span>
        </div>
    );
};

const columns = [
    {
        name: 'ID',
        sortable: true,
        selector: (row: any) => row.orderId,
    },
    {
        name: 'QTY',
        selector: (row: any) => row.qty,
    },
    {
        name: 'Email',
        selector: (row: any) => row.email,
    },
    {
        name: 'Price',
        sortable: true,
        selector: (row: any) => row.price,
    },
    {
        name: 'Action',
        selector: (row: any) => {

            return (
                <>
                    <Button id={`btnUpdate${row.sku}`} color={'theme-secondary-one'}
                            className={'bg-green-400 text-white mr-2'}><BsCartCheckFill size={14}/></Button>
                    <Button id={`btnDelete${row.sku}`} color={'theme-secondary-two'}
                            className={'bg-green-400 text-white'}><BsFillCartDashFill size={14}/></Button>

                    <UncontrolledTooltip target={`btnUpdate${row.sku}`}>
                        Approve Order
                    </UncontrolledTooltip>
                    <UncontrolledTooltip target={`btnDelete${row.sku}`}>
                        Cancel Order
                    </UncontrolledTooltip>
                </>
            )
        },
    }
];

const data = [
    {
        id: 1,
        email: 'Beetlejuice',
        qty: '12',
        orderId: 'SKU122',
        price: 1500
    },
    {
        id: 2,
        email: 'Ghostbusters',
        qty: '19',
        orderId: 'SKU123',
        price: 1200
    },
]


export const Orders = () => {

    return (
        <div className={'w-100 h-100 pt-20'}>
            <Col className={'d-flex justify-between mb-2'}>
                <span className={'w-[max-content!important] text-2xl font-semibold'}>Orders</span>
            </Col>

            <DataTable
                pagination
                data={data}
                columns={columns}
                paginationComponentOptions={{noRowsPerPage: true}}
            />
        </div>
    );
};