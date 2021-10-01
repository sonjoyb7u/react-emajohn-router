import React from 'react';
import useCarts from '../../hooks/useCarts';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import {removeFromDb} from '../../utilities/fakedb'

const OrderReview = () => {
    const [products] = useProducts([])

    const [carts, setCarts] = useCarts(products)
    
    const eventHandleRemoveItem = (key) => {
        const newCartItem = carts.filter(product => product.key !== key)
        setCarts(newCartItem)
        removeFromDb(key)
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    carts.map(product => <ReviewItem key={product.key} product={product} eventHandleRemoveItem={eventHandleRemoveItem}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;