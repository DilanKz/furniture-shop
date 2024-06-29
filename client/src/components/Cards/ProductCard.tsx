import {Button, Col} from "reactstrap";
import img from '../../assets/img/Default.jpg';
import React, {useContext, useEffect} from "react";
import Ratings from "../ratings/Ratings";
import Heart from "../../assets/icons/heart";
import UserContext from "../../context/UserProvider";
import request from "../../utils/request";

export const ProductCard = (props: any) => {

    const context = useContext(UserContext);
    if (!context) {
        throw new Error('This component must be used within a UserProvider');
    }
    const {user, setUser} = context;

    useEffect(() => {
        console.log(props)
    }, []);

    const toggleFavorites = (sku: string) => {
        console.log(sku)
        const fav = {email: user.data.email, sku: sku}
        request('POST', 'users/favorites', fav).then(r => {
            console.log(r)
            setUser(r)
        })
    }
    const addToCart = () => {
        const fav = {
            email: user.data.email,
            sku: props.product.sku,
            price: props.product.price,
            count:1
        }

        request('POST', 'users/cart', fav).then(r => {
            console.log(r)
            setUser(r)
        })
    }

    const loadFavButton = () => {

        const isFav = user && user.data.favorite.includes(props.product.sku)
        console.log(isFav)

        return (
            <Heart
                {...(user && user.data.favorite.includes(props.product.sku)
                        ? {fillColor: 'black'}
                        : {strokeColor: 'black'}
                )}
            />
        );
    }

    return (
        <Col lg={3} md={4} sm={6}>
            <div className={'flex flex-col bg-white p-2 relative overflow-y-hidden'}>
                <img src={props.product.image1} alt="" className={'w-full h-[50%!important] object-cover'}/>
                {user !== null && user.data.accountType === 'user' && (
                    <Button block color='theme-main' className='mb-1 mt-1' onClick={addToCart}>
                        Add to cart
                    </Button>
                )}
                <Ratings size={"sm"} initialRating={props.product.ratings} readOnly/>
                <span className={'text-[16px] font-semibold'}>{props.product.name}</span>
                <span className={'text-[14px] font-semibold'}>{props.product.price}</span>

                {user !== null && user.data.accountType === 'user' && (
                    <button
                        className={'w-[32px!important] h-[32px!important] bg-white rounded-full absolute top-0 right-0 mt-3 mr-3 flex justify-center items-center outline-0 shadow'}
                        onClick={() => toggleFavorites(props.product.sku)}
                    >
                        {/*<Heart
                            {...(user && user.data.favorite.includes(props.product.sku)
                                    ? {strokeColor: 'black'}
                                    : {fillColor: 'black'}
                            )}
                        />*/}

                        {loadFavButton()}
                    </button>
                )}
            </div>
        </Col>
    );
};