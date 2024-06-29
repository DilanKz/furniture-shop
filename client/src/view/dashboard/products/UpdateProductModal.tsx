import { Button, Input, Modal, ModalBody, ModalHeader } from "reactstrap";
import React, { useState } from "react";
import request from "../../../utils/request";

export const UpdateProductModal = (props: any) => {
    const toggleModal = () => props.toggle(!props.open);
    const [product, setProduct] = useState({
        sku: props.product.sku,
        count: props.product.count,
        price: props.product.price,
        description: props.product.description
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const updateProduct = async () => {
        request('PUT', `products/update`, product).then(r => {
            if (r.success) {
                props.loadAll();
                setProduct({
                    sku: '',
                    count: '',
                    price: '',
                    description: ''
                });
                toggleModal();
            }
        });
    };

    return (
        <Modal
            isOpen={props.open}
            toggle={toggleModal}
            centered={true}
            size={'lg'}
        >
            <ModalHeader toggle={toggleModal}>
                Update Product
            </ModalHeader>
            <ModalBody>
                <div className="mb-4">
                    <label htmlFor="count" className="block text-gray-700 text-sm font-bold mb-2">Count</label>
                    <Input type="text" id="count" name="count" value={product.count} onChange={handleChange}
                           className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                    <Input type="text" id="price" name="price" value={product.price} onChange={handleChange}
                           className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <Input type="textarea" id="description" name="description" value={product.description} onChange={handleChange}
                           className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="flex items-center justify-between mt-4">
                    <Button onClick={updateProduct} color={'theme-secondary-one'} type="button"
                            className="text-white font-bold py-2 px-4 ">Update Product
                    </Button>
                </div>
            </ModalBody>
        </Modal>
    );
};
