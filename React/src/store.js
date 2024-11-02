import { configureStore, createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({

name:'products',

initialState:{
    veg: [
        {name:"Tamato",price: 200.5},
        {name:"Ghee",price: 300.5},
        {name:"Potato",price: 100.5}

    ],
    nonveg: [
        {name:"Chicken",price: 300.5},
        {name:"Eggs",price: 100.5},
        {name:"Mutton",price: 1000.5}

    ]
},

reducers:{}



})



const cartslice = createSlice({
name:'cart',
initialState : [],
reducers:{


// Adding items to Cart
            addToCart : (state,action)=>{
                                        const status = state.find(item => item.name === action.payload.name)
                                        if(status) {
                                        
                                            status.quantity += 1;
                                        }
                                        else{

                                            state.push({...action.payload,quantity :1});

                                        }
                                    },

// Increment the cart quantity
            increment : (state,action) =>{
                     const status = state.find(item => item.name === action.payload)
                     if(status){
                        status.quantity +=1;

                     }


            },
// Decrement the cart quantity and quantity is Zero Remove The Item from Cart
            decrement : (state,action) =>{
                const status = state.find(item => item.name === action.payload)
                if(status,status.quantity > 1){
                   status.quantity -=1;

                }
                else{

                   return state.filter(item => item.name != action.payload)
                }
                


       },
// Removing Item From Cart
       remove : (state,action) =>{

       
            return state.filter(item => item.name != action.payload.name)


       }


   }


})
// Exporting Reducers and Destructuring Array
export const { addToCart,increment,decrement,remove} = cartslice.actions;


const store = configureStore({
reducer:
{
    products : productSlice.reducer,
    cart:cartslice.reducer
}

})

export default store;