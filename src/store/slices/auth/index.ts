// slices/authSlice.ts

import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    user: any;
    errors: string | null;
}

// Retrieve the initial state from local storage if available
let initialState: AuthState = {
    user: null,
    errors: null,
};

if (typeof window !== 'undefined') {
    initialState = {
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : null,
        errors: null,
    };
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.errors = null;
            // Save the user object to local storage
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
            state.errors = null;
            // Clear the user object from local storage
            localStorage.removeItem('user');
        },
        setCart: (state, action) => {
            state.user.cart = action.payload;
            state.errors = null;
            // Save the user object to local storage
            localStorage.setItem('cart', JSON.stringify(action.payload));
        },
    },
});

export const { setUser, setErrors, clearUser,setCart } = authSlice.actions;

export default authSlice.reducer;
