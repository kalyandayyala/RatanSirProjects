import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchProducts } from './store';
import './FOOD.css';

function NonVeg() {
    const nonvegProducts = useSelector(state => state.products.nonVeg);  // Corrected the property name
    const dispatch = useDispatch();

    const nonVegItems = nonvegProducts.map((product, index) => (
        <li key={index} className="product-item">
             <img 
                className="product-image" 
                src={`${`public`}/${product.image}`} // Correct path to the public folder image
                width={200}
                height={200}
                alt={product.name}
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-button" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </li>
    ));

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="veg-container">
            <h1 className="title">Non Veg Items</h1>
            <ul className="product-list">
                {nonVegItems}
            </ul>
        </div>
    );
}

export default NonVeg;
