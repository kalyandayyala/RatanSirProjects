import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPurchase, clearCart, decrement, increment, remove } from './store';
import './Cart.css';

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const [discount, setDiscount] = useState(0);
    const [cupDiscount, setCupDiscount] = useState("");
    const [cupDiscountPer, setCupDiscountPer] = useState(0);

    // Calculate Total, Discount, and Final Amount
    const calculateDiscount = () => {
        let total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
        total = parseFloat(total.toFixed(2));
        
        let dis = total * discount / 100;
        dis = parseFloat(dis.toFixed(2));

        let cupDis = total * cupDiscountPer / 100;
        cupDis = parseFloat(cupDis.toFixed(2));

        let netAmount = total - dis - cupDis;
        return { total, dis, netAmount, cupDis };
    };

    const { total, dis, netAmount, cupDis } = calculateDiscount();

    // Handle Discount Percentage
    const handleDiscountPercentage = (disValue) => {
        setDiscount(disValue);
    };

    // Handle Coupon Code Calculation
    const handleCouponCode = () => {
        switch (cupDiscount) {
            case "KALYAN10": setCupDiscountPer(10); break;
            case "KALYAN20": setCupDiscountPer(20); break;
            case "DWl27": setCupDiscountPer(27); break;
            case "DSSRA40": setCupDiscountPer(40); break;
            default: 
                alert("Invalid Coupon Entered");
                setCupDiscountPer(0);
                break;
        }
    };

    // Handle Add to History
    const handleHistory = () => {
        const purchaseDate = new Date().toLocaleDateString();
        const purchaseHistory = {
            date: purchaseDate,
            items: [...cart],
            totalAmount: Number(netAmount),
        };

        dispatch(clearCart());
        dispatch(addPurchase(purchaseHistory));
    };

    // Render Cart Products
    const renderCartProducts = () => {
        return cart.map((cartProduct, index) => (
            <li key={index} className="cart-item">
                  <img 
                className="product-image" 
                src={`${`public`}/${cartProduct.image}`} // Correct path to the public folder image
                width={150}
                height={100}
                alt={cartProduct.name}
            />
                <h4>{cartProduct.name}</h4>
                <p>Price: ${cartProduct.price}</p>
                <p>Quantity: {cartProduct.quantity}</p>
                <div className="cart-buttons">
                    <button onClick={() => dispatch(increment(cartProduct.name))}>+</button>
                    <button onClick={() => dispatch(decrement(cartProduct.name))}>-</button>
                    <button onClick={() => dispatch(remove(cartProduct))}>Remove</button>
                </div>
            </li>
        ));
    };

    return (
        <>
            <div className="cart-container">
                <h1 className="cart-header">CART</h1>
                <h3>List of Items</h3>
                {cart.length === 0 ? (
                    <p>Cart is Empty</p>
                ) : (
                    <div>
                        <ul className="cart-list">
                            {renderCartProducts()}
                        </ul>

                        <div className="cart-total">
                            <p>Total Amount Before Discount: ${total}</p>
                        </div>

                        <div className="discount-section">
                            <button onClick={() => handleDiscountPercentage(10)}>Apply 10% Discount</button>
                            <button onClick={() => handleDiscountPercentage(20)}>Apply 20% Discount</button>
                            <button onClick={() => handleDiscountPercentage(30)}>Apply 30% Discount</button>
                        </div>

                        <div className="coupon-section">
                            <input
                                type="text"
                                value={cupDiscount}
                                placeholder="Enter Coupon Code"
                                onChange={(e) => setCupDiscount(e.target.value)}
                            />
                            <button onClick={handleCouponCode}>Apply Coupon</button>
                            <p>Coupon Discount Amount: ${cupDis}</p>
                        </div>

                        <div className="discount-summary">
                            <p>Discount Percentage Applied: {discount}%</p>
                            <p>Discount Amount: ${dis}</p>
                            <p>Final Amount After Discount: ${netAmount}</p>
                        </div>

                        <button onClick={handleHistory} className="checkout-button">
                            Add To History
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;
