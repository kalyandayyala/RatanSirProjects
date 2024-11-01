import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({

name :'Products',
initialState: {

    men:
    [
        {Name:"Shirt",Size:"L",Price:400.0},
        {Name:"pant",Size:"XL",Price:800.0},
        {Name:"TShirt",Size:"M",Price:300.0},
        {Name:"Shorts",Size:"L",Price:200.0}

    ],
   
    women : 
     [
    { Name: "Dress", Size: "M", Price: 1200.0 },
    { Name: "Skirt", Size: "L", Price: 600.0 },
    { Name: "Top", Size: "S", Price: 450.0 },
    { Name: "Jeans", Size: "M", Price: 900.0 }
    ],

    kids : 
    [
    { Name: "TShirt", Size: "S", Price: 150.0 },
    { Name: "Shorts", Size: "XS", Price: 100.0 },
    { Name: "Frock", Size: "S", Price: 250.0 },
    { Name: "Jacket", Size: "M", Price: 350.0 }
    ],

    beauty :
     [
    { Name: "Lipstick", Size: "Small", Price: 250.0 },
    { Name: "Foundation", Size: "Medium", Price: 750.0 },
    { Name: "Eyeliner", Size: "Small", Price: 150.0 },
    { Name: "Perfume", Size: "100ml", Price: 500.0 }
    ]
},
reducers : {}



})

const store = configureStore({
 reducer:
 {products : productSlice.reducer}

})


export default store;