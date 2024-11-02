import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, remove } from './store';

function Cart() {
    const dispatch = useDispatch();
    const carter =useSelector(state => state.cart)
    const cartProducts = carter.map((cartProduct,index) => 
        <li key={index}>

           Item : {cartProduct.name} - Price : {cartProduct.price} - Quantity : {cartProduct.quantity}
            
            
            <button onClick={()=>dispatch(increment(cartProduct.name))}>+</button>
            <button onClick={()=>dispatch(decrement(cartProduct.name))} >-</button>
            <button  onClick={()=>dispatch(remove(cartProduct))} >Remove</button>
        </li>
        )

    

    
    const [discount,setDiscount] = useState(0);


   

    const handleDiscountPercentage = (disValue)=>{
      
      setDiscount(disValue)

    }



    const [cupdiscount,setCupDiscount] = useState("");
    const [cupdiscountper,setCupDiscountper] = useState(0);
    
    const cupDiscountCalulation = () =>{
        switch (cupdiscount) {
            case "KALYAN10" : setCupDiscountper(10)
                
                break;
            case "KALYAN20":setCupDiscountper(20)
            
                break;
            case "DWl27":setCupDiscountper(27)
        
            break;
            case "DSSRA40":setCupDiscountper(40)
        
            break;
        
            default: alert("Invalid Coupan ENterd")
                    setCupDiscountper(0)
                break;
        }

    }
    

    const calculateDiscount = () =>{
        let total =  carter.reduce((sum,item)=> sum + item.quantity * item.price,0 )
        total =parseFloat(total.toFixed(2))
        let dis = total * discount/100
        dis = parseFloat(dis)

        let cupdis = total * cupdiscountper/100
        cupdis = parseFloat(cupdis)
        let netAmount = total - dis - cupdis
        return { total, dis, netAmount,cupdis }

    }



    let { total,dis,netAmount,cupdis} = calculateDiscount()

    
   


    return (

       
        <>
         <h1>CART</h1>
         <h3>List of Items</h3>
         {
         (carter.length === 0 )?( 
            <p>Cart is Empty</p>
         ) :
         (
            <div>
            <ul>
            {cartProducts}
            <p>---------------------------</p>
         </ul>
         <p>Total Amount Before Discount : ${total}</p>
         

         <button onClick={()=> handleDiscountPercentage(10)}>Apply10% Discount</button> 
         <button onClick={()=> handleDiscountPercentage(20)}>Apply20% Discount</button> 
         <button onClick={()=> handleDiscountPercentage(30)}>Apply30% Discount</button> 

         <p>---------------------------</p>
         <input type="text" value={cupdiscount} placeholder='Enter CoupanCode'onChange={(e)=>setCupDiscount(e.target.value)} />
         <button onClick={()=> cupDiscountCalulation()}>ApplyCoupan</button>
         <p>CoupanDiscount Amount : ${cupdis}</p>
         <p>---------------------------</p>


        <p> Discount Percentage applied : {discount}%</p>
        <p>Discount Amount : ${dis}</p>
        <p>Final Amount After Discount : ${netAmount}</p>
        <p>---------------------------</p>
        <button>Buy Now</button>
         </div>

         ) 
         }


         
       
         </>
        
    )
}

export default Cart
