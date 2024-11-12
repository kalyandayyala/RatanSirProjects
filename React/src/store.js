import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// You don't need to import 'thunk' here because it's included by default in Redux Toolkit


export const getProducts = async () => {
    try{
        const response = await axios.get('http://localhost:4545/api/v1/getFoodItems')
        console.log('API Response:', response.data);
        return response.data;
    }
    catch(error)
    {   console.log(error)
        return [];
    }
};










export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await getProducts();  // Fetch products from API

    // Filter the items based on category
    const veg = response.filter(item => item.category === 'veg');
    const nonVeg = response.filter(item => item.category === 'non veg');
    console.log('API xxx veg items:', veg);

    // Return the filtered items
    return { veg, nonVeg };
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    veg: [],
    nonVeg: [],
    status: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.veg = action.payload.veg || [];
        state.nonVeg = action.payload.nonVeg || [];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

const cartslice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const status = state.find(item => item.name === action.payload.name);
      if (status) {
        status.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action) => {
      const status = state.find(item => item.name === action.payload);
      if (status) {
        status.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const status = state.find(item => item.name === action.payload);
      if (status && status.quantity > 1) {
        status.quantity -= 1;
      } else {
        return state.filter(item => item.name !== action.payload);
      }
    },
    remove: (state, action) => {
      return state.filter(item => item.name !== action.payload.name);
    },
    clearCart: () => {
      return [];
    }
  }
});

const purchaseHistorySlice = createSlice({
  name: 'purchaseHistory',
  initialState: [],
  reducers: {
    addPurchase: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addPurchase } = purchaseHistorySlice.actions;

// Exporting Reducers and Destructuring Array
export const { addToCart, increment, decrement, remove, clearCart } = cartslice.actions;

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartslice.reducer,
    purchaseHistory: purchaseHistorySlice.reducer
  },
  // Middleware configuration - No need to manually add thunk, it's included by default
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;
