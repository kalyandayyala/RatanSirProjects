import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from './store'

function Veg() {

    const vegProducts = useSelector(state => state.products.veg)
    const dispatch = useDispatch();
    const items = vegProducts.map((product,index) => 
                    <li key={index}>

                        {product.name} - {product.price}
                        
                        <button onClick={()=> dispatch(addToCart(product))}>Add to Cart</button>
                    </li>
                
                )


    return (
        <>
        <h1>Veg Items</h1>
        
       <ul>
        {items}
       </ul>
        
        </>
        
    )
}

export default Veg
