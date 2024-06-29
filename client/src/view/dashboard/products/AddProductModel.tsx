import {Button, Input, Modal, ModalBody, ModalHeader} from "reactstrap";
import React, {useState} from "react";
import request from "../../../utils/request";
import {generatePDF} from "../../../utils/pdf";

export const AddProductModel = (props: any) => {
    const toggleModal = () => props.toggle(!props.open);
    const [product, setProduct] = useState({
        name: '',
        price: '',
        count: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, files} = e.target;
        if (files && files.length > 0) {

            getBase64(files[0]).then((base64Image) => {
                setProduct(prevProduct => ({
                    ...prevProduct,
                    [name]: base64Image
                }));
            }).catch(error => {
                console.error('Error: ', error);
            });
        }
    };

    const getBase64 = (file:File) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    };

    const addProduct = async () => {
        request('POST', 'products/add', product).then(r => {
            if (r.success) {
                props.loadAll()
                setProduct({
                    name: '',
                    price: '',
                    count: '',
                    image1: '',
                    image2: '',
                    image3: '',
                    image4: '',
                    description: ''
                })
                toggleModal()
            }
        })
    }


    return (
        <Modal
            isOpen={props.open}
            toggle={toggleModal}
            centered={true}
            size={'lg'}
        >
            <ModalHeader toggle={toggleModal}>
                Add Product
            </ModalHeader>
            <ModalBody>
                <div className="grid grid-cols-2 gap-2">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-1">Name</label>
                        <Input type="text" id="name" name="name" value={product.name} onChange={handleChange}
                               className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-1">Price</label>
                        <Input type="text" id="price" name="price" value={product.price} onChange={handleChange}
                               className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="count" className="block text-gray-700 text-sm font-bold mb-2">Count</label>
                        <Input type="text" id="count" name="count" value={product.count} onChange={handleChange}
                               className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div className="mb-4">
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image1" className="block text-gray-700 text-sm font-bold mb-2">Images</label>
                        <Input accept={'image/*'} type="file" id="image1" name="image1" onChange={handleFileChange}
                               className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image2" className="block text-white text-sm font-bold mb-2">Image 2</label>
                        <Input accept={'image/*'} type="file" id="image2" name="image2" onChange={handleFileChange}
                               className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div className="mb-4">
                        <Input accept={'image/*'} type="file" id="image3" name="image3" onChange={handleFileChange}
                               className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div className="mb-4">
                        <Input accept={'image/*'} type="file" id="image4" name="image4" onChange={handleFileChange}
                               className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="description"
                           className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <Input type="textarea" id="count" name="description" value={product.description} onChange={handleChange}
                           className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <Button onClick={addProduct} color={'theme-secondary-one'} type="button"
                            className="text-white font-bold py-2 px-4 ">Add Product
                    </Button>
                </div>
            </ModalBody>
        </Modal>
    );
};