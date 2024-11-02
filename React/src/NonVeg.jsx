import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './store';

function NonVeg() {

    const nonvegProducts = useSelector(state => state.products.nonveg)
    const dispatch = useDispatch();
    const nonVegItems =nonvegProducts.map((product,index) => 
                    <li key={index}>

                        {product.name} - {product.price}
                        <button onClick={()=> dispatch(addToCart(product))}>Add to Cart</button>
                    </li>
                
                )


    return (
        <>
         <h1>Veg Items</h1>
        
       <ul>
        {nonVegItems}
       </ul>
        
        </>
    )
}

export default NonVeg
