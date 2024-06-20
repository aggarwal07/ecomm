// src/store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  cart: any[];
  errors: string | null;
  isOpen: boolean;
}

// Retrieve the initial cart state from local storage if available
let initialState: CartState = {
  cart: [],
  errors: null,
  isOpen: false,
};

if (typeof window !== 'undefined') {
  initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '[]') : [],
    errors: null,
    isOpen: false,
  };
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<any[]>) => {
      state.cart = action.payload;
      state.errors = null;
      // Save the cart to local storage
      localStorage.setItem('cart', JSON.stringify(action.payload));
    },
    setErrors: (state, action: PayloadAction<string | null>) => {
      state.errors = action.payload;
    },
    clearCart: (state) => {
      state.cart = [];
      state.errors = null;
      // Clear the cart from local storage
      localStorage.removeItem('cart');
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setCart, setErrors, clearCart, toggleCart, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
