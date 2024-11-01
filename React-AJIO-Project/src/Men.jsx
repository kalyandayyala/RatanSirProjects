import React from 'react'
import { useSelector } from 'react-redux';


function Men() {
    const menProducts = useSelector(state => state.products.men)
    const menItems = menProducts.map((product,index) => 
                                                    <li key={index}>
                                                      Name : {product.Name} - Size : {product.Size} - Price : {product.Price}
                                                      <button>Add To Cart</button>
                                                    </li>
                                                    )



    return (
        <>
        <h1>This is Men Page</h1>
        <ul>
            {menItems}
        </ul>

        </>
        
    )
}

export default Men
