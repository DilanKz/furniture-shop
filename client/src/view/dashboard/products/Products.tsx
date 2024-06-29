import * as React from 'react';
import {Button, Col, UncontrolledTooltip} from "reactstrap";
import {FaPen, FaTrash} from "react-icons/fa6";
import request from "../../../utils/request";
import {useEffect, useState} from "react";
import DataTable, { ExpanderComponentProps } from 'react-data-table-component';
import {AddProductModel} from "./AddProductModel";
import {UpdateProductModal} from "./UpdateProductModal";

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

export const Products = () => {
    const [response, setResponse] = useState([])
    const [openAddProduct, setOpenAddProduct] = useState(false);
    const [openEditProduct, setOpenEditProduct] = useState(false)

    const loadAllProducts = async () => {
        await request('GET', 'products/all').then(r => {
            setResponse(r.data)
        });
    }

    useEffect(() => {
        loadAllProducts()
    }, []);


    const deleteProduct = (id:string) => {
        request('POST', `products/remove/${id}`).then(r => {
            if (r.success) {
            }
        })
    }

    const customColumn = () => {
        return [
            {
                name: 'SKU',
                sortable: true,
                selector: (row: any) => row.sku,
            },
            {
                name: 'QTY',
                selector: (row: any) => row.count,
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
                            <Button onClick={()=>setOpenEditProduct(true)} id={`btnUpdate${row.sku}`} color={'theme-secondary-three'}
                                    className={'bg-green-400 text-white mr-2'}><FaPen size={10}/></Button>

                            <Button onClick={()=>deleteProduct(row.sku)} id={`btnDelete${row.sku}`} color={'theme-secondary-two'}
                                    className={'bg-green-400 text-white'}><FaTrash size={10}/></Button>

                            {openEditProduct ?
                                <UpdateProductModal
                                    product={row}
                                    open={openEditProduct}
                                    loadAll={loadAllProducts}
                                    toggle={setOpenEditProduct}
                                /> : ''}

                            <UncontrolledTooltip target={`btnUpdate${row.sku}`}>
                                Update Product
                            </UncontrolledTooltip>
                            <UncontrolledTooltip target={`btnDelete${row.sku}`}>
                                Delete Product
                            </UncontrolledTooltip>
                        </>
                    )
                },
            }
        ];
    }

    return (
        <div className={'w-100 h-100 pt-20'}>
            <Col className={'d-flex justify-between mb-2'}>
                <span className={'w-[max-content!important] text-2xl font-semibold'}>Products</span>

                <Button color={'theme-secondary-one'} className={'w-[max-content!important]'} onClick={()=>setOpenAddProduct(true)}>Add Product</Button>
            </Col>

            <DataTable
                pagination
                data={response ? response : [] }
                columns={customColumn()}
                paginationComponentOptions={{noRowsPerPage: true}}
                expandableRows expandableRowsComponent={ExpandedComponent}
            />

            {openAddProduct ? <AddProductModel loadAll={loadAllProducts} open={openAddProduct} toggle={setOpenAddProduct} /> : ''}

        </div>
    );
};