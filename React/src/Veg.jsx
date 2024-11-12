import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './FOOD.css';
import { addToCart, fetchProducts } from './store';

function Veg() {
    const vegProducts = useSelector(state => state.products.veg);
    const dispatch = useDispatch();

    const items = vegProducts.map((product, index) => (
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
            <button className="add-to-cart-button" onClick={() => dispatch(addToCart(product))}>
                Add to Cart
            </button>
        </li>
    ));

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="veg-container">
            <h1 className="title">Veg Items</h1>
            <ul className="product-list">
                {items}
            </ul>
        </div>
    );
}

export default Veg;
