import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = (props) => {
    const {key, name, price, quantity} = props.product
    const {eventHandleRemoveItem} = props
    return (
        <div className="product">
            <div>
                <h4 className="product-name">{name} - {key}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <br />
                <button
                    className="btn-regular"
                    onClick={()=>eventHandleRemoveItem(key)}
                ><FontAwesomeIcon icon={faShoppingCart} /> Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItem;